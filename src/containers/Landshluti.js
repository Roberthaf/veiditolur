import React, { Component } from 'react'
import '../styles/Landshluti.css'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import * as db from '../DataBase/DataBase'
import { year } from '../DataBase/years'
import RiverChart from '../components/HighChartRiver'
import { withHighcharts } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
//import BarChart from '../components/Barchart';
import {
    PagingState,
    LocalPaging,
    FilteringState,
    LocalFiltering,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    TableView,
    TableHeaderRow,
    PagingPanel,
    TableFilterRow,
} from '@devexpress/dx-react-grid-bootstrap3';

class Landshluti extends Component {
    constructor() {
        super();
        this.state = {
            selection: [],
            years: year,
            columns: [
                { name: "title", title: "Veiðiár" }
            ],
            rows: [],
            url: '',
            heildarveidi: '',
            landshluti: '',
            area: '',
            year: 2017,
            selectNumber: 43,
            pastYear: '',
            yearArray: '',
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.changeSelection = this.changeSelection.bind(this);
        this.checkBreyting = this.checkBreyting.bind(this);
        this.currentLineDbGetter = this.currentLineDbGetter.bind(this);
        this.sortFunction = this.sortFunction.bind(this);
        this.tableRowTemplate = ({ children, row }) => (
            <tr
                onClick={() => window.location = `${this.props.location.pathname}/${row.id}`}
            >
                {children}
            </tr>
        );
    }
    changeSelection(selection) {
        const lastSelected = selection
            .find(selected => this.state.selection.indexOf(selected) === -1);
        if (lastSelected !== undefined) {
            this.setState({ selection: [lastSelected] });
        } else {
            // NOTE: Uncomment the next line in order to allow clear selection by double-click
            // this.setState({ selection: [] });
        }
    }
    componentDidMount() {
        const { match: { path } } = this.props;
        var MyRe = /\/(.+)/g;
        const url = this.props.match.url;
        var area = MyRe.exec(`${url}`)
        var yearArray = this.currentLineDbGetter();
        //console.log(yearArray)
        this.setState({
            url: path,
            area: area[1],
            yearArray: yearArray

        })
    }
    sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }
    componentWillMount() {
        var AllRows = [];
        var MyRe = /\/(.+)/g;
        const url = this.props.match.url;
        var area = MyRe.exec(`${url}`)
        // búa til landshluta nafn
        var landshluti;
        switch (area[1]) {
            case 'austurland':
                landshluti = "Austurland"
                break;
            case 'sudurland':
                landshluti = "Suðurland"
                break;
            case 'vesturland':
                landshluti = "Vesturland"
                break;
            case 'nvesturland':
                landshluti = "Norð Vesturland"
                break;
            case 'nausturland':
                landshluti = "Norð Austurland"
                break;
            case 'vestfirdir':
                landshluti = "Vestfirðir"
                break;
            default:
                break;
        }
        for (var key in db) {
            if (db[key].area === `${area[1]}`) {
                AllRows.push({
                    title: db[key].title,
                    data: db[key].data,
                    stangir: db[key].stangir,
                    fps: db[key].fps(),
                    id: db[key].id
                })
            }
        }
        // Búa til array sem inniheldur summu allra veidda fiska á landshluta
        var array = AllRows.map((o => o.data.map(d => d)))
        var sum = array[0].map((_, i) => array.reduce((p, _, j) => p + array[j][i], 0));

        //búa til gögn sem sína síðustu 2 ár í veið
        // var yearSelect = 2;
        //var maxYear = 2017 - 1974;
        //var minYear = 2016 - 1974;
        //var select = [minYear, maxYear];
        var newArray = [];
        newArray = AllRows.map(a => ({ ...a, data: a.data.slice(Math.max(a.data.length - 5, 1)) }))

        // Summa up árinn sem eru valinn
        //var yearsArray = newArray.map((o => o.data.map(d => d)))
        //var yearSum = yearsArray[0].map((_, i) => yearsArray.reduce((p, _, j) => p + yearsArray[j][i], 0));
        //console.log(yearsArray)     
        var yearArray = this.currentLineDbGetter();

        this.setState({
            rows: AllRows,
            heildarveidi: sum,
            area: area[1],
            landshluti: landshluti,
            pastYear: newArray,
            yearArray: yearArray
        });
    }
    currentLineDbGetter() {
        var area = this.state.area;
        var baseYear = 1974;
        var selectNumber = this.state.year - baseYear;
        var all = [];
        var yearLineArray = []
        //var area = area;
        for (var key in db) {
            if (db[key].year[selectNumber]) {
                if (db[key].area === area) {
                    if (db[key].data[selectNumber] === 0) {
                        ///skip
                    } else {
                        all.push(db[key].data[selectNumber])
                        yearLineArray.push(db[key].title)
                    }
                }

            }
            // if(db[key].year.map(o => o===2017 )){
            //   PieArray.push({
            //     title: db[key].title,
            //     data: db[key].data[this.state.selectNumber],
            //     id: db[key].id,
            //     area: db[key].area,
            //   })
            // }
        }
        //   yearArray = [ 
        //   ]
        return { all, yearLineArray };
    }

    checkBreyting(selection) {
        var brt = this.state.rows[selection].data[43] - this.state.rows[selection].data[42]
        if (brt > 0) {
            return (<p className="brt-green">{brt} laxar</p>);
        } else {
            return (<p className="brt-red">{brt} laxar</p>);
        }
    }
    /*Hanlde db changes */
    handleChange(e) {
        e.preventDefault();
        this.setState({
            year: e.target.value,
            selectNumber: e.target.value - 1974,
        });
    }
    onFormSubmit(e) {
        e.preventDefault();
        if (this.state.year < 1974) {
            this.setState({ errorMessage: 'Engin gögn eldri en frá 1974' })
        } else {
            this.setState({
                errorMessage: '',
                yearArray: this.currentLineDbGetter(),
            })
        }
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (this.state.year < 1974) {
                this.setState({ errorMessage: 'Engin gögn eldri en frá 1974' })
            } else {
                this.setState({
                    errorMessage: '',
                    yearArray: this.currentLineDbGetter(),
                })
            }
        }
    }
    render() {
        var {
            heildarveidi, years, columns, rows, landshluti, yearArray
         } = this.state;
        // Test if arrays are equal do not delete
        //console.log(this.state.rows.map(o=> [o.data.length, o.title]))
        //console.log(yearArray) pastYear
        console.log(this.state)
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                    <Row>
                        <Col lg={2} md={2} sm={12} xs={12} >
                            <Grid
                                rows={rows}
                                columns={columns}
                            >
                                <FilteringState defaultFilters={[]} />
                                <LocalFiltering />
                                <PagingState
                                    defaultCurrentPage={0}
                                    defaultPageSize={16}
                                />
                                <LocalPaging />
                                <TableView tableRowTemplate={this.tableRowTemplate} />
                                <TableHeaderRow />
                                <TableFilterRow />
                                <PagingPanel />
                            </Grid>
                        </Col>
                        <Col lg={4} className="input-bar">

                                <span className="input-group-item spanSize">Veldu ár: </span>
                                <div className="input-bar-item">
                                    <form>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Search"
                                                value={this.state.year}
                                                onChange={this.handleChange}
                                                onKeyPress={this.handleKeyPress}
                                            />
                                            <span className="input-group-btn">
                                                <Button onClick={this.onFormSubmit}
                                                    className="btn btn-info"
                                                >Leita</Button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        <Col lg={10} md={10} sm={12} xs={12} >

                            <div className="chart-border">
                                <RiverChart
                                    title={`Veiði á ${landshluti} árið 2017`}
                                    data={yearArray.all}
                                    id={landshluti}
                                    name={yearArray.yearLineArray}
                                    years={'2017'}
                                    color={'#337ab7'}
                                    width={40}
                                />
                            </div>
                        </Col>
                        <Col lg={10} lgOffset={2} md={10} mdOffset={2} sm={12} xs={12} >
                            <div className="chart-border">
                                <RiverChart
                                    title={`Heildar Veiði á ${landshluti} frá upphafi`}
                                    data={heildarveidi}
                                    id={landshluti}
                                    name={years}
                                    color={'#337ab7'}
                                    width={20}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10} lgOffset={2} md={10} mdOffset={2} sm={9} xs={12} >
                            <div className="chart-border">
                                {/*                                 <BarChart
                                    data={pastYear}
                                    color={'#8467D7'}
                                /> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
//barArrayNew ColumnSeries
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(withHighcharts(Landshluti, Highcharts));

/*                        <Col lg={10} lgOffset={2} md={10} mdOffset={2} sm={9} smOffset={3} xs={12}>
                            <h4>Bera saman síðustu ár</h4>
                            <div className="chart-border">
                                <h4>Veiðiár heildar veiðir 2016 og 2017</h4>
                                
                                <BarChart
                                year={years}
                                data={rows}
                                title={rows.title}
                                />
                            </div>
                        </Col> */
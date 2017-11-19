import React, { Component } from 'react'
import '../styles/Landshluti.css'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import * as db from '../DataBase/DataBase'
import { year } from '../DataBase/years'
import RiverChart from '../components/HighChartRiver'
import { withHighcharts } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
import BarChart from '../components/Barchart';
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
            year: [2017, 2016],
            pastYear: ''
        }
        this.changeSelection = this.changeSelection.bind(this);
        this.checkBreyting = this.checkBreyting.bind(this);

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
        this.setState({
            url: path
        })
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
        var yearSelect = 2;
        var maxYear = 2017 - 1974;
        var minYear = 2016 - 1974;
        var select = [minYear, maxYear];
        var newArray = [];
        newArray = AllRows.map( a=> ({...a, data: a.data.slice(Math.max(a.data.length - 5, 1))})   )
        // Summa up árinn sem eru valinn
        var yearsArray = newArray.map((o => o.data.map(d => d)))
        //var yearSum = yearsArray[0].map((_, i) => yearsArray.reduce((p, _, j) => p + yearsArray[j][i], 0));
        //console.log(yearsArray)
        this.setState({
            rows: AllRows,
            heildarveidi: sum,
            area: area[1],
            landshluti: landshluti,
            pastYear: newArray
        });
    }
    checkBreyting(selection) {
        var brt = this.state.rows[selection].data[43] - this.state.rows[selection].data[42]

        if (brt > 0) {
            return (<p className="brt-green">{brt} laxar</p>);
        } else {
            return (<p className="brt-red">{brt} laxar</p>);
        }
    }
    render() {
        var {
            heildarveidi, years, year, selection, columns, rows, landshluti,
            pastYear
         } = this.state;
        // Test if arrays are equal do not delete
        //console.log(this.state.rows.map(o=> [o.data.length, o.title]))
        //console.log()
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                    <Row>
                        <Col lg={2} md={2} sm={3} xs={12} >
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
                        <Col lg={10} md={10} sm={9} xs={12} >
                            <div className="chart-border">
                                <RiverChart
                                    title={`Heildar Veiði á ${landshluti}`}
                                    data={heildarveidi}
                                    id={landshluti}
                                    years={years}
                                    color={'#337ab7'}
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
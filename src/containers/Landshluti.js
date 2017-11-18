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
import {
    PagingState,
    LocalPaging,
  } from '@devexpress/dx-react-grid';
import {
    Grid,
    TableView,
    TableHeaderRow,
    PagingPanel,
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
            heildarveidi : '',
            landshluti: '',
            area: ''
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
                landshluti = "NorðVesturland"
            break;
            case 'nausturland':
                landshluti = "NorðAusturland"
            break;
            case 'vestfirdir':
                landshluti = "Vestfirðir"
            break;
            default:
                break;
        }

        for (var key in db) {
            if (db[key].area === `${area[1]}` ) {
                AllRows.push({
                    title: db[key].title,
                    data: db[key].data,
                    stangir: db[key].stangir,
                    fps: db[key].fps(),
                    id: db[key].id
                })
            }
        }

        var array = AllRows.map((o => o.data.map(d=>d)))
        var sum = array[0].map((_, i) => array.reduce((p, _, j) => p + array[j][i], 0));
 
        this.setState({
            rows: AllRows,
            heildarveidi: sum,
            area: area[1],
            landshluti: landshluti
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
        var {heildarveidi, years, selection, columns, rows, landshluti   } = this.state;
        
        console.log(this.state.rows.map(o=> [o.data.length, o.title]))
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                    <Row>
                        <Col lg={2} xs={3} md={2} className="sidebar">
                            <Grid
                                rows={rows}
                                columns={columns}
                            >
                            <PagingState
                                defaultCurrentPage={0}
                                defaultPageSize={8}
                            />
                            <LocalPaging />
                            <TableView tableRowTemplate={this.tableRowTemplate} />
                            <TableHeaderRow />
                            <PagingPanel />
                            </Grid>
                        </Col>
                        <Col lg={10} xs={9} md={10}>
                            <RiverChart 
                                title={`Heildar Veiði á ${landshluti}`} 
                                data={heildarveidi} 
                                id={landshluti} 
                                years={years}
                                /> 
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(withHighcharts(Landshluti, Highcharts));

/*
     <div className="App">
            <NavBar />
            <Grid >
            
            </Grid>
            </div>
                <Row>
                    <Col lg={2} xs={3} md={2} className="sidebar">

                </Col>

                    
                                       <SideBarDev 
                            rows={rows}
                            columns={columns}
                            selection={selection}
                            onSelectionChange={this.changeSelection}
                            ontableRowTemplate={this.tableRowTemplate}
                        />
                   
                   <Col lg={10} xs={9} md={10}>
                        <div className="chart-border">
                            <h4>Heildar Veiði</h4>
                            <RiverChart 
                                title={rows[selection].title} 
                                data={rows[selection].data} 
                                id={rows[selection].id} 
                                years={years}
                                stangir={rows[selection].stangir}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        Stangar Fjöldi: {this.state.rows[selection].stangir}
                        <br />
                        Breyting frá síðasta ári: {this.checkBreyting(selection)}
                        <br />
                    </Col> 
                </Row>



*/
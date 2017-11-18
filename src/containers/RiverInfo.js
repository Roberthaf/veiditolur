import React, { Component } from 'react'
import '../styles/RiverInfo.css'
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

class RiverInfo extends Component {
    constructor() {
        super();
        this.state = {
            selection: [],
            years: year,
            columns: [
                { name: "title", title: "Veiðiár" }
            ],
            rows: [],
            sinlgeRiver:[]
            

        }
        this.changeSelection = this.changeSelection.bind(this);
        this.checkBreyting = this.checkBreyting.bind(this);
        this.tableRowTemplate = ({ children, row }) => (
            <tr
                onClick={() => window.location = row.id}
            >
                {children}
            </tr>
        );
    }
    componentDidMount() {
        //const {match:{ params} } = this.props
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
    componentWillMount() {
        var RiverRows = [];
        var MyRe = /\/(.+)\//g;
        const location = this.props.match.params.id;
        const url = this.props.match.url;
        var area = MyRe.exec(`${url}`)
        
        console.log(area[1])
        console.log(location)
        console.log(url)
        // Búa til rows fyrir SideBarDev
        for (var key in db) {
            if (db[key].area === `${area[1]}`) {
                RiverRows.push({
                    title: db[key].title,
                    data: db[key].data,
                    stangir: db[key].stangir,
                    fps: db[key].fps(),
                    id: db[key].id
                })
            }
        }
        const RiverSingleRow = db[location];
        this.setState({
            rows: RiverRows,
            area: area[1],
            location: location,
            sinlgeRiver: RiverSingleRow
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
        var { years, selection, columns, rows,sinlgeRiver } = this.state;
        console.log(this.state)

        return (
            <div className="App">
                <NavBar />
                <div className="container" >
                    <Row>
                        <Col lg={2} xs={3} md={2} className="sidebar">
                            <div>
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
                            </div>
                        </Col>
                        <Col lg={10} xs={9} md={10}>
                            <div className="chart-border">
                                <h4>Heildar Veiði í {sinlgeRiver.title}</h4>
                                <RiverChart
                                    data={sinlgeRiver.data}
                                    id={sinlgeRiver.id}
                                    years={years}
                                    stangir={sinlgeRiver.stangir}
                                />
                            </div>
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
export default connect(mapStateToProps)(withHighcharts(RiverInfo, Highcharts));

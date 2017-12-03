import React, { Component } from 'react'
import '../styles/RiverInfo.css'
import { connect } from 'react-redux'
import { Row, Col,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import * as db from '../DataBase/DataBase'
import { year } from '../DataBase/years'
import RiverChart from '../components/HighChartRiver'
import { withHighcharts } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
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
            sinlgeRiver: [],
            year: 2017,
            selectNumber: 43,
        }
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

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
        var { years, columns, rows, sinlgeRiver } = this.state;
        return (
            <div className="App">
                <NavBar />
                <div className="container" >
                    <Row>
                        <Col lg={2} md={2} sm={3} xs={12} className="sidebar">
                            <div>
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
                            </div>
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
                        <Col lg={10} md={10} sm={9} xs={12}>
                            <div className="chart-border">
                                <h4>Heildar Veiði í {sinlgeRiver.title}</h4>
                                <RiverChart
                                    data={sinlgeRiver.data}
                                    id={sinlgeRiver.id}
                                    name={years}
                                    stangir={sinlgeRiver.stangir}
                                    width={20}
                                />
                            </div>
                        </Col>
                        {/*                         <Col lg={10} md={10} sm={9} xs={12}>
                            <div className="chart-border">
                                <h4>Heildar Veiði í {sinlgeRiver.title}</h4>
                                <RiverChart
                                    data={sinlgeRiver.data}
                                    id={sinlgeRiver.id}
                                    name={years}
                                    stangir={sinlgeRiver.stangir}
                                    width={20}
                                />
                            </div> 
                        </Col>*/}
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

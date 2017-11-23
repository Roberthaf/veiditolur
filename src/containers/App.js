import React, { Component } from 'react'
import '../styles/App.css'
import Highcharts from 'highcharts';
import { withHighcharts } from 'react-jsx-highcharts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as db from '../DataBase/DataBase';
import { all } from '../DataBase/allrivers';
import NavBar from '../components/NavBar';
import AllRivers from '../components/AllRivers';
import _ from 'lodash';
import {
  PagingState,
  LocalPaging,
  LocalSorting,
  SelectionState,
  SortingState,
  FilteringState,
  LocalFiltering,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  TableView,
  TableHeaderRow,
  PagingPanel,
  TableSelection,
  TableFilterRow,
} from '@devexpress/dx-react-grid-bootstrap3'
import { Col, Row, Button  } from 'react-bootstrap'
import PieChart from '../components/PieChart'
class App extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        //{ name: 'title', title: 'Veiðivatn' },
        { name: 'linking', title: 'Veiðivatn'},
        { name: 'data', title: 'Heildarveiði [stk]' },
        { name: 'fps', title: 'Laxar á stöng [stk]' },
        { name: 'stangir', title: 'Stangarfjöldi' }

      ],
      rows: [],
      allowedPageSizes: [5, 10, 15, 0],
      sorting: [{ columnName: 'data', direction: 'desc' }],
      selection: [],
      aukning: '',
      selectYear: 2017,
      baseYear: 1974,
      selectNumber: 43,
      errorMessage: '',
      pieArray: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.dataBaseGetter = this.dataBaseGetter.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
    this.changeSorting = sorting => this.setState({ sorting });
    this.createLink = this.createLink.bind(this);
    this.pieChartDbGetter = this.pieChartDbGetter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  translateYearToNumber() {
    var number = this.state.selectYear - 1974
    return number
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
  dataBaseGetter() {
    var RiversArray = [];
    for (var key in db) {
      RiversArray.push({
        title: db[key].title,
        data: db[key].data[this.state.selectNumber],
        fps: Math.floor(db[key].data[this.state.selectNumber] / db[key].stangir),
        stangir: db[key].stangir,
        id: db[key].id,
        area: db[key].area,
        linking: this.createLink(db[key].title, db[key].id, db[key].area)
      })
    }
    return RiversArray;
  }

  pieChartDbGetter(){
    var PieArray = [];
    var baseYear= 1974;
    var selectNumber = this.state.selectYear - baseYear;
    console.log(selectNumber)
    var al= 0,nal= 0,nvl= 0,vl= 0,sl= 0,vf = 0;
    var all = [];
    for(var key in db){
     if(db[key].year[selectNumber]){
      if(db[key].area==='vesturland'){
        vl += db[key].data[selectNumber]
      }
      if(db[key].area==='austurland'){
        al += db[key].data[selectNumber]
      }
      if(db[key].area==='nausturland'){
        nal += db[key].data[selectNumber]
      }
      if(db[key].area==='nvesturland'){
        nvl += db[key].data[selectNumber]
      }
      if(db[key].area==='sudurland'){
        sl += db[key].data[selectNumber]
      }
      if(db[key].area==='vestfirdir'){
        vf += db[key].data[selectNumber]
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
  PieArray = [ 
    ['Austurland',al],
    ['Norð Austurland',nal],
    ['Norð Vesturland',nvl],
    ['Vesturland',vl],
    ['Suðurland',sl],
    ['Vestfirðir',vf],
  ]
  return PieArray;
  }
  createLink(title, id, href){
    //console.log(href, id, title );
    var link = `/`+href+`/`+id
    var renderLink = <Link to={link} id={id}>{title}</Link>
    return renderLink;
  }
  // this.tableRowTemplate = ({ children, row }) => (
  //   <tr
  //     onClick={() => alert(JSON.stringify(row))}
  //   >
  //     {children}
  //   </tr>
  // );
  componentWillMount() {
    var RiversArray = this.dataBaseGetter();
    var PieArray = this.pieChartDbGetter();
    this.setState({
      rows: RiversArray,
      pieArray: PieArray,
    })
    // aukning.push({
    //   title: db[key].title,
    //   aukning: Math.floor(db[key].data[this.state.selectNumber]/db[key].data[this.state.selectNumber-1])
    // })
    //var array = RiversArray.map((o => o.data.map(d=>d)))
    //var sum = array[0].map((_, i) => array.reduce((p, _, j) => p + array[j][i], 0));
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      selectYear: e.target.value,
      selectNumber: e.target.value - 1974,
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.selectYear < 1974) {
      this.setState({ errorMessage: 'Engin gögn eldri en frá 1974' })
    } else {
      this.setState({
        errorMessage: '',
        rows: this.dataBaseGetter(),
        pieArray: this.pieChartDbGetter()
      })
    }
  }
  handleKeyPress =(e) => {
      e.preventDefault();      
       if (e.key === 'Enter') {
        if (this.state.selectYear < 1974) {
          this.setState({ errorMessage: 'Engin gögn eldri en frá 1974' })
        } else {
          this.setState({
            errorMessage: '',
            rows: this.dataBaseGetter(),
            pieArray: this.pieChartDbGetter()
          })
        }
       }
     }
  render() {
    const {
       rows, columns, selection, allowedPageSizes,selectYear, pieArray
    } = this.state;
    //console.log("Create Link",this.createLink())
    //console.log(this.state.linking)
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Row>
            <Col lg={3} className="input-bar">
              <span className="input-group-item spanSize">Veldu ár: </span>
              <div className="input-bar-item">
                <form>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Search"
                      value={this.state.selectYear}
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
             <Col lg={12} xs={12}>
             <span>{this.state.errorMessage}</span>
               <Grid
                rows={rows}
                columns={columns}
              >
                <PagingState
                  defaultCurrentPage={0}
                  defaultPageSize={10}
                />
                <SortingState
                  sorting={this.state.sorting}
                  onSortingChange={this.changeSorting}
                />
                <FilteringState defaultFilters={[]} />
                <LocalFiltering />
                <LocalSorting />
                <SelectionState
                  selection={selection}
                  onSelectionChange={this.changeSelection}
                />
                <LocalPaging />
                <TableView 
                />
                <TableHeaderRow allowSorting />
                <TableSelection
                  selectByRowClick
                  highlightSelected
                  showSelectionColumn={false}
                />

                <TableFilterRow />
                <PagingPanel
                  allowedPageSizes={allowedPageSizes}
                />
              </Grid>
             </Col>
             <Col lg={12} xs={12}>
              <div className="chart-border">
              <div>Skoða sem  <Button>Súlurit</Button> <Button>Köku</Button></div>
              <PieChart Title={`Heildarveiði í landshlutum ${selectYear}`} data={pieArray} />
              </div>
            </Col>
             <Col lg={12} xs={12}>
              <div className="chart-border">
                <AllRivers Title={all.title} data={all.data.reverse()} />
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
//
export default connect(mapStateToProps)(withHighcharts(App, Highcharts));
/*
               <Grid
                rows={rows}
                columns={columns}
              >
                <PagingState
                  defaultCurrentPage={0}
                  defaultPageSize={10}
                />
               
                <SortingState
                  sorting={this.state.sorting}
                  onSortingChange={this.changeSorting}
                />
                <FilteringState defaultFilters={[]} />
                <LocalFiltering />
                <LocalSorting />
                <SelectionState
                  selection={selection}
                  onSelectionChange={this.changeSelection}
                />
                <LocalPaging />
                <TableView tableRowTemplate={this.tableRowTemplate} />
                <TableHeaderRow allowSorting />
                <TableSelection
                  selectByRowClick
                  highlightSelected
                  showSelectionColumn={false}
                />

                <TableFilterRow />
                <PagingPanel
                  allowedPageSizes={allowedPageSizes}
                />
              </Grid>
                //tableRowTemplate={this.tableRowTemplate}
                tableCellTemplate={
                  ({ row }) => {
                    var newRow = {
                      title: `<Link to='/${row.area}/${row.id}'>row.title<L/>ink></Link>`,
                      data: row.data,
                      fps: row.fps,
                      id: row.id,
                      stangir: row.stangir
                    }
                    return console.log()
                  }
                }
*/
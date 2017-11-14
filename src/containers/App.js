import React, { Component } from 'react'
import '../styles/App.css'
import Highcharts from 'highcharts';
import { withHighcharts } from 'react-jsx-highcharts';
import { connect } from 'react-redux'
import * as db from '../DataBase/DataBase'
import { all } from '../DataBase/allrivers'
//import { year } from '../DataBase/years'
import NavBar from '../components/NavBar'
import AllRivers from '../components/AllRivers'
import { Grid, TableView, TableHeaderRow,PagingPanel, TableSelection } from '@devexpress/dx-react-grid-bootstrap3'
import { PagingState,  LocalPaging,  LocalSorting, SelectionState, SortingState} from "@devexpress/dx-react-grid";
import { Col, Row } from 'react-bootstrap'

class App extends Component {
  constructor(){
    super();
    this.state = {
      columns:[
        {name: 'title', title: 'Veiðivatn'},
        {name: 'data', title: 'Heildarveiði [stk]'},
        {name: 'fps', title: 'Laxar á stöng [stk]'},
        {name: 'stangir', title: 'Stangarfjöldi'}
        
      ],
      rows: '',
      sorting: [{ columnName: 'data', direction: 'desc' }],
      selection: [],
      aukning: '',
      selectYear : 2016,
      selectNumber : 42,
      errorMessage :''
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.dataBaseGetter = this.dataBaseGetter.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
    this.changeSorting = sorting => this.setState({ sorting });
  }
  translateYearToNumber(){
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
  dataBaseGetter(){
    var RiversArray = []
    for (var key in db) {
      RiversArray.push({
      title: db[key].title, 
      data: db[key].data[this.state.selectNumber], 
      fps: Math.floor(db[key].data[this.state.selectNumber]/db[key].stangir),
      stangir: db[key].stangir,
      id: db[key].id})
    }
    return RiversArray;
  }
  componentWillMount(){
    var RiversArray = this.dataBaseGetter()     
    this.setState({
        rows:RiversArray
      })
       // aukning.push({
      //   title: db[key].title,
      //   aukning: Math.floor(db[key].data[this.state.selectNumber]/db[key].data[this.state.selectNumber-1])
      // })
    }
  handleChange(e) {
    e.preventDefault();
    this.setState({ 
      selectYear: e.target.value,
      selectNumber : e.target.value - 1974,
      
    });    
    
  }
  onFormSubmit(e){
    e.preventDefault();
    //console.log(e.target);
    if(this.state.selectYear<1974){
      this.setState({ errorMessage:'Engin gögn eldri en frá 1974'})
    }else{
      this.setState({
        errorMessage:'',
        rows: this.dataBaseGetter()
      })
    }
  }
  render() {
    const { rows, columns, selection } = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Row>
            <Col lg={12} xs={12}>
              <h4 className="form-header">Veldu ár:&nbsp;</h4>
              <form className="input-group" onSubmit={this.onFormSubmit}>
              <input
                type="number" 
                placeholder="Veldu ár"
                className="form-control"
                value={this.state.selectYear}
                onChange={this.handleChange}
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </span>
              </form>
              <h4 className="errorText">{this.state.errorMessage}</h4>
              </Col>
              
          </Row>
          <Grid
            rows={rows}
            columns={columns}
           >
            <SortingState
              sorting={this.state.sorting}
              onSortingChange={this.changeSorting}
            />
            <LocalSorting />
            <SelectionState
              selection={selection}
              onSelectionChange={this.changeSelection}
            />
            <PagingState defaultCurrentPage={0} pageSize={8} />
            <LocalPaging />
            <TableView />
            <TableHeaderRow allowSorting /> 
            <TableSelection
              selectByRowClick
              highlightSelected
              showSelectionColumn={false}
            />
            <PagingPanel />
          </Grid>
          <div className="chart-border">
            <AllRivers Title={all.title} data={all.data.reverse()} />  
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}
//
export default connect(mapStateToProps)(withHighcharts(App, Highcharts));

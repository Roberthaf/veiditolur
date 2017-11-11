import React, { Component } from 'react'
import '../styles/App.css'
import Highcharts from 'highcharts';
import { withHighcharts } from 'react-jsx-highcharts';
import { connect } from 'react-redux'
import * as db from '../DataBase/DataBase'
import { all } from '../DataBase/allrivers'
import { year } from '../DataBase/years'
import NavBar from '../components/NavBar'
import AllRivers from '../components/AllRivers'
import { Grid, TableView, TableHeaderRow,PagingPanel } from '@devexpress/dx-react-grid-bootstrap3'
import { PagingState,  LocalPaging,  LocalSorting,  SortingState} from "@devexpress/dx-react-grid";
import { Col, Row } from 'react-bootstrap'
//Parse or database. 42 is 2016
// Þarf að leysa það vesen
var RiversArray= [];
var aukning = [];

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
      rows: RiversArray,
      sorting: [{ columnName: 'data', direction: 'desc' }],
      selectYear : 2016,
      errorMessage :''
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.changeSorting = sorting => this.setState({ sorting });
  }
  componentWillMount(){
    for (var key in db) {
      RiversArray.push({
        title: db[key].title, 
        data: db[key].data[42], 
        fps: Math.floor(db[key].data[42]/db[key].stangir),
        stangir: db[key].stangir,
      })
      aukning.push({
        title: db[key].title,
        aukning: Math.floor(db[key].data[42]/db[key].data[41])
      })
    }
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ selectYear: e.target.value });    
    
  }
  onFormSubmit(e){
    e.preventDefault();
    //console.log(e.target);
    if(this.state.selectYear<1974){
      this.setState({ errorMessage:'Engin gögn eldri en 1974'})
    }else{
      this.setState({ errorMessage:''})
      console.log('allgood in the hood')
    }
  }
  getValidationState() {
    // const length = this.state.value.length;
    // if (length > 10) return 'success';
    // else if (length > 5) return 'warning';
    // else if (length > 0) return 'error';
    // return null;
  }
  render() {
    const { rows, columns } = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Row>
            <Col sm={6} md={3}>
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
            </Col>
            <Col sm={6} md={3}>
            {this.state.errorMessage}
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
            <PagingState defaultCurrentPage={0} pageSize={8} />
            <LocalPaging />
            <LocalSorting />
            <TableView />
            <TableHeaderRow allowSorting /> 
            <PagingPanel />
          </Grid>

          <AllRivers Title={all.title} data={all.data.reverse()} />  
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
/*
          <form> </form>
            <h4> Veldu ár 
              <form >
              <select id={'select-year'} name={'Ár'} > 
                {year.map(
                  (years, index) => 
                  <option key={index} value={years}>{years}</option>
                )}
              </select>
              <input type="submit" />
              </form>
              </h4> 
              
                      <FormGroup
          controlId="formBasicText"
          //validationState={this.getValidationState()}
        >
          <ControlLabel>Veldur ár</ControlLabel>
          <FormControl
            type="text"
            value={this.state.selectYear}
            placeholder="2016"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
              
              
              
              */
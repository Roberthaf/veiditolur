import React, { Component } from 'react'
import '../styles/App.css'
 import Highcharts from 'highcharts';
 import {
 withHighcharts
} from 'react-jsx-highcharts';
import { connect } from 'react-redux'
import { hofsa } from '../DataBase/DataBase'

import NavBar from '../components/NavBar'
import RiverChart from '../components/HighChartRiver'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RiverChart Title={hofsa.title} data={hofsa.data} fps={hofsa.fps()}/>
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps)(withHighcharts(App,Highcharts));

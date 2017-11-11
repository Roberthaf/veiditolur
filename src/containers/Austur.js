import React, { Component } from 'react'
import '../styles/Austur.css'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import * as db from '../DataBase/DataBase'
import {year } from '../DataBase/years'
import RiverChart from '../components/HighChartRiver'
import { withHighcharts } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
import FiskarPerStong from '../components/FiskPerStong'


class Austur extends Component{   
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state ={
            selectedRiver : '',
            RiverData: db['breiddalsa'],
            fps: db['breiddalsa'].fps(),
            years: year
        }
    }
    componentWillMount(){
        var RiversArray = []
        for (var key in db) {
            if(db[key].area === "AL"){
                 RiversArray.push([db[key].title, db[key].id])
            }
        }
      this.setState({
        Rivers: RiversArray
      })
    }
    handleClick(e){
        var element = document.getElementById(e);
        element.classList.toggle('active');
        
        this.setState({
            selectedRiver: e,
            RiverData: db[e],
            fps: db[e].fps()
        })
      }
    render(){
       var { RiverData, fps,years } = this.state; 
       //console.log(this.state)
        return(
            <div className="App">
            <NavBar />
            <Grid >
                <Row>
                    <Col xs={2} md={2} >
                    <SideBar 
                        Rivers={this.state.Rivers}
                        onClickHandler={this.handleClick}
                        />   
                    </Col>
                    <Col xs={10} md={10} >
                    <h4>Heildar Veiði</h4>
                    <RiverChart title={RiverData.title} data={RiverData.data} id={RiverData.id} years={years}/>
                    <h4>Fiskar per stöng</h4>
                    <FiskarPerStong title={RiverData.title} fps={fps} years={years} />
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
  }
export default connect(mapStateToProps)(withHighcharts(Austur,Highcharts));
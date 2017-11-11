import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import * as db from '../DataBase/DataBase'
import RiverChart from '../components/HighChartRiver'
import { withHighcharts } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';


var RiversArray = []
class Austur extends Component{   
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    Rivers() {
        for (var key in db) {
        if(db[key].area === "AL"){
            RiversArray.push(db[key].title)
        }
       }
    }
    handleClick(e){
        //e.preventDefault();
        console.log(e);
      }
    render(){
        console.log(db.hofsa)
        this.Rivers()
        return(
            <div className="App">
            <NavBar />
            <Grid >
                <Row>
                    <Col xs={2} md={2} >
                        <SideBar 
                        Rivers={RiversArray}
                        onClickHandler={this.handleClick}
                        />   
                    </Col>
                    <Col xs={10} md={10} >
                    <RiverChart title={db.hofsa.title} data={db.hofsa.data} fps={db.hofsa.fps()}/>
                    
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
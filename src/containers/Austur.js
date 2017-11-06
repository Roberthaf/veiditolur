import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import * as database from '../DataBase/DataBase'

var RiversArray = []
class Austur extends Component{
    
    Rivers() {
        for (var key in database) {
        if(database[key].area === "AL"){
            RiversArray.push(database[key].title)
        }
       }
    }
    render(){
        //console.log(RiversArray)
        {this.Rivers()}
        return(
            <div className="App">
            <NavBar />
            <Grid >
                Austurland
                <Row>
                    <Col xs={4} md={3} lg={2}>
                        <SideBar Rivers={RiversArray}/>   
                    </Col>
                    <Col xs={6} md={8} lg={10}>
                        Main Div
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
export default connect(mapStateToProps)(Austur);
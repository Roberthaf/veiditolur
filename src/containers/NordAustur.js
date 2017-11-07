import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import * as database from '../DataBase/DataBase'

var RiversArray = []

class NordAustur extends Component{
    Rivers() {
        for (var key in database) {
        if(database[key].area === "NAL"){
            RiversArray.push(database[key].title)
        }
       }
    }
    render(){
        return(
            <div className="App">
            <NavBar />
                Norð austurland
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
  }
export default connect(mapStateToProps)(NordAustur);
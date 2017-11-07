import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import * as database from '../DataBase/DataBase'
var RiversArray = []

class Nordvestur extends Component{
    Rivers() {
        for (var key in database) {
        if(database[key].area === "NVL"){
            RiversArray.push(database[key].title)
        }
       }
    }
    render(){
        return(
            <div className="App">
            <NavBar />
                Norð Vesturland
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
  }
export default connect(mapStateToProps)(Nordvestur);
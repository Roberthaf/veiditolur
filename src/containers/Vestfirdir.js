import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import * as database from '../DataBase/DataBase'
var RiversArray = []

class Vestfirdir extends Component{
    Rivers() {
        for (var key in database) {
        if(database[key].area === "VF"){
            RiversArray.push(database[key].title)
        }
       }
    }
    render(){
        return(
            <div className="App">
            <NavBar />
                Vestfirdir
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
  }
export default connect(mapStateToProps)(Vestfirdir);
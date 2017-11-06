import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'

class Sudur extends Component{
    render(){
        return(
            <div className="App">
            <NavBar />
                Sudurland
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
  }
export default connect(mapStateToProps)(Sudur);
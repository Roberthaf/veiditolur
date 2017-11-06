import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'

class NordAustur extends Component{
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
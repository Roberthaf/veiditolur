import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'

class vestur extends Component{
    render(){
        return(
            <div className="App">
            <NavBar />
                Vesturland
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
  }
export default connect(mapStateToProps)(vestur);
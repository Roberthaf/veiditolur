import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'

class Vestfirdir extends Component{
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
import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'

class Nordvestur extends Component{
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
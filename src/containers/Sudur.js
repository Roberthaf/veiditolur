import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import SideBarDev from '../components/SideBarDev'
import NavBar from '../components/NavBar'
import * as db from '../DataBase/DataBase'
import {year } from '../DataBase/years'
import RiverChart from '../components/HighChartRiver'
import { withHighcharts } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
import FiskarPerStong from '../components/FiskPerStong'

class Sudur extends Component{   
    constructor(){
        super();
        this.state ={
            selection: [0],
            RiverNew: '',
            years: year,
            columns:[
                { name: "title", title: "Veiðiár" }
            ]
        }
        this.changeSelection = this.changeSelection.bind(this);
    }  
    changeSelection(selection) {
        const lastSelected = selection
          .find(selected => this.state.selection.indexOf(selected) === -1);
      
        if (lastSelected !== undefined) {
          this.setState({ selection: [lastSelected] });
        } else {
          // NOTE: Uncomment the next line in order to allow clear selection by double-click
          // this.setState({ selection: [] });
         }
        }
    componentWillMount(){
        var RiverNew = [];
        for (var key in db) {
            if(db[key].area === "SL"){
                RiverNew.push({
                    title: db[key].title,
                    data: db[key].data,
                    stangir: db[key].stangir,
                    fps: db[key].fps(),                    
                    id: db[key].id
                    })
            }
        }
      this.setState({
        RiverNew: RiverNew
      })
    }

    render(){
        var { years, selection, RiverNew, columns } = this.state; 
         return(
             <div className="App">
             <NavBar />
             <Grid >
                 <Row>
                     <Col lg={2} xs={3} md={2} className="sidebar">
                         <div>
                         <SideBarDev 
                             rows={RiverNew}
                             columns={columns}
                             selection={selection}
                             onSelectionChange={this.changeSelection}
                         />
                         </div>
                     </Col>
                     <Col lg={10} xs={9} md={10}>
                         <div className="chart-border">
                             <h4>Heildar Veiði</h4>
                             <RiverChart 
                                 title={RiverNew[selection].title} 
                                 data={RiverNew[selection].data} 
                                 id={RiverNew[selection].id} 
                                 years={years}
                                 stangir={RiverNew[selection].stangir}
                             />
                         </div>
                         <div className="chart-border">
                             <h4>Fiskar per stöng</h4>
                                 <FiskarPerStong 
                                     title={RiverNew[selection].title} 
                                     fps={RiverNew[selection].fps} 
                                     years={years} 
                                 />
                         </div>
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
export default connect(mapStateToProps)(withHighcharts(Sudur,Highcharts));

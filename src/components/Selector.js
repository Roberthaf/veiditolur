import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/App.css';
import * as db from '../DataBase/DataBase';


class SerachBar extends Component {
    constructor(){
        super();
        this.state={
        selection: [],
        aukning: '',
        selectYear: 2017,
        baseYear: 1974,
        selectNumber: 43,
        }
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.dataBaseGetter = this.dataBaseGetter.bind(this);
        this.pieChartDbGetter = this.pieChartDbGetter.bind(this);
        
    }
    dataBaseGetter() {
        var RiversArray = [];
        for (var key in db) {
          RiversArray.push({
            title: db[key].title,
            data: db[key].data[this.state.selectNumber],
            fps: Math.floor(db[key].data[this.state.selectNumber] / db[key].stangir),
            stangvd: db[key].stangvd,
            stvd: (db[key].data[this.state.selectNumber] / db[key].stangvd).toFixed(2),        
            stangir: db[key].stangir,
            id: db[key].id,
            area: db[key].area,
            linking: this.createLink(db[key].title, db[key].id, db[key].area)
          })
        }
        return RiversArray;
      }
    
      pieChartDbGetter(){
        var PieArray = [];
        var baseYear= 1974;
        var selectNumber = this.state.selectYear - baseYear;
        console.log(selectNumber)
        var al= 0,nal= 0,nvl= 0,vl= 0,sl= 0,vf = 0;
        var all = [];
        for(var key in db){
         if(db[key].year[selectNumber]){
          if(db[key].area==='vesturland'){
            vl += db[key].data[selectNumber]
          }
          if(db[key].area==='austurland'){
            al += db[key].data[selectNumber]
          }
          if(db[key].area==='nausturland'){
            nal += db[key].data[selectNumber]
          }
          if(db[key].area==='nvesturland'){
            nvl += db[key].data[selectNumber]
          }
          if(db[key].area==='sudurland'){
            sl += db[key].data[selectNumber]
          }
          if(db[key].area==='vestfirdir'){
            vf += db[key].data[selectNumber]
          }
         }
        // if(db[key].year.map(o => o===2017 )){
        //   PieArray.push({
        //     title: db[key].title,
        //     data: db[key].data[this.state.selectNumber],
        //     id: db[key].id,
        //     area: db[key].area,
        //   })
        // }
      }
      PieArray = [ 
        ['Austurland',al],
        ['Norð Austurland',nal],
        ['Norð Vesturland',nvl],
        ['Vesturland',vl],
        ['Suðurland',sl],
        ['Vestfirðir',vf],
      ]
      return PieArray;
      }
    handleChange(e) {
        e.preventDefault();
        this.setState({
          selectYear: e.target.value,
          selectNumber: e.target.value - 1974,
        });
      }
      onFormSubmit(e) {
        e.preventDefault();
        if (this.state.selectYear < 1974) {
          this.setState({ errorMessage: 'Engin gögn eldri en frá 1974' })
        } else {
          this.setState({
            errorMessage: '',
            rows: this.dataBaseGetter(),
            pieArray: this.pieChartDbGetter()
          })
        }
      }
      handleKeyPress =(e) => {
        e.preventDefault();      
         if (e.key === 'Enter') {
          if (this.state.selectYear < 1974) {
            this.setState({ errorMessage: 'Engin gögn eldri en frá 1974' })
          } else {
            this.setState({
              errorMessage: '',
              rows: this.dataBaseGetter(),
              pieArray: this.pieChartDbGetter()
            })
          }
         }
       }
    render() {
        const {
            rows, columns, selection, allowedPageSizes,selectYear, pieArray
         } = this.state;
        return (
                <div className="input-bar-item">
                    <form>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Search"
                                value={this.state.selectYear}
                                onChange={this.state.handleChange}
                                onKeyPress={this.state.handleKeyPress}
                            />
                            <span className="input-group-btn">
                                <Button onClick={this.state.onFormSubmit}
                                    className="btn btn-info"
                                >Leita</Button>
                            </span>
                        </div>
                    </form>
                </div>
        );
    }
}
export default SerachBar;
{/*
<span className="input-group-item spanSize">Veldu ár: </span>
 <SerachBar
  value={this.state.selectYear}
  onChange={this.handleChange}
  onKeyPress={this.handleKeyPress}
  onClick={this.onFormSubmit}
/> */}
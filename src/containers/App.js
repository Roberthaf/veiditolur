import React, { Component } from 'react'
import '../styles/App.css'
import Highcharts from 'highcharts';
import { withHighcharts } from 'react-jsx-highcharts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as db from '../DataBase/DataBase';
import { all } from '../DataBase/allrivers';
import NavBar from '../components/NavBar';
import AllRivers from '../components/AllRivers';
import {
  PagingState,
  LocalPaging,
  LocalSorting,
  SelectionState,
  SortingState,
  // FilteringState,
  // LocalFiltering,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  TableView,
  TableHeaderRow,
  PagingPanel,
  TableSelection,
  // TableFilterRow,
} from '@devexpress/dx-react-grid-bootstrap3';
import { Col, Row, Button, FormGroup, FormControl } from 'react-bootstrap';
import PieChart from '../components/PieChart';
import Tooltip from '../containers/Tooltip'

class App extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        //{ name: 'title', title: 'Veiðivatn' },
        { name: 'linking', title: 'Veiðivatn' },
        { name: 'data', title: 'Heildarveiði [stk]' },
        { name: 'stangvd', title: 'Stangadagar' },
        { name: 'stvd', title: 'H.veiði / Stangadagar (HV/S)' },
/*         { name: 'stdAllir', title: 'HV/S á Allar Stangir' }, */
        { name: 'fps', title: 'Meðalveiði á stöng' },
        { name: 'stangir', title: 'Stangarfjöldi' }

      ],
      rows: [],
      allowedPageSizes: [5, 10, 15, 0],
      sorting: [{ columnName: 'data', direction: 'desc' }],
      selection: [],
      aukning: '',
      selectYear: 2017,
      baseYear: 1974,
      selectNumber: 43,
      errorMessage: '',
      pieArray: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    
    this.dataBaseGetter = this.dataBaseGetter.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
    this.changeSorting = sorting => this.setState({ sorting });
    this.createLink = this.createLink.bind(this);
    this.pieChartDbGetter = this.pieChartDbGetter.bind(this);
  }
  translateYearToNumber() {
    var number = this.state.selectYear - 1974
    return number
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
  dataBaseGetter() {
    var RiversArray = [];
    for (var key in db) {
      if (db[key].data[this.state.selectNumber] > 1) {
        RiversArray.push({
          title: db[key].title,
          data: db[key].data[this.state.selectNumber],
          fps: Math.floor(db[key].data[this.state.selectNumber] / db[key].stangir),
          stangvd: db[key].stangvd,
          stvd: (db[key].data[this.state.selectNumber] / db[key].stangvd).toFixed(2),
          stdAllir: ((db[key].data[this.state.selectNumber] / db[key].stangvd) * db[key].stangir).toFixed(2),
          stangir: db[key].stangir,
          id: db[key].id,
          area: db[key].area,
          linking: this.createLink(db[key].title, db[key].id, db[key].area)
        })
      }
    }
    return RiversArray;
  }

  pieChartDbGetter() {
    var PieArray = [];
    var baseYear = 1974;
    var selectNumber = this.state.selectYear - baseYear;
    console.log(selectNumber)
    var al = 0, nal = 0, nvl = 0, vl = 0, sl = 0, vf = 0;
    for (var key in db) {
      if (db[key].year[selectNumber]) {
        if (db[key].area === 'vesturland') {
          vl += db[key].data[selectNumber]
        }
        if (db[key].area === 'austurland') {
          al += db[key].data[selectNumber]
        }
        if (db[key].area === 'nausturland') {
          nal += db[key].data[selectNumber]
        }
        if (db[key].area === 'nvesturland') {
          nvl += db[key].data[selectNumber]
        }
        if (db[key].area === 'sudurland') {
          sl += db[key].data[selectNumber]
        }
        if (db[key].area === 'vestfirdir') {
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
      ['Austurland', al],
      ['Norð Austurland', nal],
      ['Norð Vesturland', nvl],
      ['Vesturland', vl],
      ['Suðurland', sl],
      ['Vestfirðir', vf],
    ]
    return PieArray;
  }
  createLink(title, id, href) {
    //console.log(href, id, title );
    var link = `/` + href + `/` + id
    var renderLink = <Link to={link} id={id}>{title}</Link>
    return renderLink;
  }
  // this.tableRowTemplate = ({ children, row }) => (
  //   <tr
  //     onClick={() => alert(JSON.stringify(row))}
  //   >
  //     {children}
  //   </tr>
  // );
  componentWillMount() {
    var RiversArray = this.dataBaseGetter();
    var PieArray = this.pieChartDbGetter();
    this.setState({
      rows: RiversArray,
      pieArray: PieArray,
    })
    // aukning.push({
    //   title: db[key].title,
    //   aukning: Math.floor(db[key].data[this.state.selectNumber]/db[key].data[this.state.selectNumber-1])
    // })
    //var array = RiversArray.map((o => o.data.map(d=>d)))
    //var sum = array[0].map((_, i) => array.reduce((p, _, j) => p + array[j][i], 0));
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
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
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
  }
  render() {
    const {
       rows, columns, selection, allowedPageSizes, selectYear, pieArray
    } = this.state;
    //console.log("Create Link",this.createLink())
    //console.log(this.state.linking)
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Row>
            <Col lg={3} className="input-bar">

              <span className="input-group-item spanSize">Veldu ár: </span>
              <div className="input-bar-item">
                <form>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Search"
                      value={this.state.selectYear}
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress}
                    />
                    <span className="input-group-btn">
                      <Button onClick={this.onFormSubmit}
                        className="btn btn-info"
                      >Leita</Button>
                    </span>
                  </div>
                </form>
              </div>
            </Col>
            <Col lg={3} lgOffset={6}>
{/*             <div >
            <FormGroup className={"floatright"}>
              <FormControl className="input-search" type="text" placeholder="Leita" />
            </FormGroup>
            </div> */}
            </Col>
            <Col lg={12} xs={12}>
              <span>{this.state.errorMessage}</span>
              <Grid
                rows={rows}
                columns={columns}
              >
                <PagingState
                  defaultCurrentPage={0}
                  defaultPageSize={10}
                />
                <SortingState
                  sorting={this.state.sorting}
                  onSortingChange={this.changeSorting}
                />
                {/*                 <FilteringState defaultFilters={[]} />  */}
                {/*               <LocalFiltering /> */}
                <LocalSorting />
                <SelectionState
                  selection={selection}
                  onSelectionChange={this.changeSelection}
                />
                <LocalPaging />
                <TableView
                />
                <TableHeaderRow allowSorting />
                <TableSelection
                  selectByRowClick
                  highlightSelected
                  showSelectionColumn={false}
                />

                {/*                 <TableFilterRow /> */}
                <PagingPanel
                  allowedPageSizes={allowedPageSizes}
                />
              </Grid>
            </Col>
            <Col lg={12} xs={12} >
              <div className="chart-border-text">
                <h4> Áhugavert er að taka saman tölfræi um heildarveiði á íslandi
                T.d. að skoða svo kallaða <b>stangdaga</b>. <br /> Stangdagar eru: <i><b>Stangarfjöldi x Fjöldi daga á veiðitímabili</b></i>.
                <br /> Fyrir Ytri-Rangá þá er það 18 stangir* 123 veiðidagar(20.06 til 20.10) = 2214.<br />
                  Ef við deilum stangveiðidögum í heildarveiði þá gefur sú tala okkur meðalveiði á hverja stöng á dag.
                 <br /> Þetta er nákvæmara enn að deila stangarfjölda með heildarveiði. Enn sú tala
                er líka tekinn með til gamans.
              </h4>
              </div>
            </Col>
            <Col lg={12} xs={12}>

              <div className="chart-border">
                {/*  <div>Skoða sem  <Button>Súlurit</Button> <Button>Köku</Button></div> */}
                <PieChart Title={`Heildarveiði í landshlutum ${selectYear}`} data={pieArray} />
              </div>
            </Col>
            <Col lg={12} xs={12}>
              <div className="chart-border">
                <AllRivers Title={all.title} data={all.data.reverse()} />
              </div>
            </Col>

          </Row>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(withHighcharts(App, Highcharts));

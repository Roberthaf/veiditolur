import React from 'react'
import {  
    HighchartsChart, Chart, XAxis, YAxis, Title,  Tooltip, ColumnSeries
    
} from 'react-jsx-highcharts';
import '../styles/HighChartRiver.css'
const RiverChart = (props) => (       
    <div className="RiverChart">
         <HighchartsChart>
         <Chart />
         <Title>{props.title}</Title>
            <XAxis categories={props.years}>
              <XAxis.Title>Ár</XAxis.Title>
            </XAxis>
     
            <YAxis id="number">
              <YAxis.Title>Veiddir Fiskar</YAxis.Title>
              
              <ColumnSeries color={props.color} id="fiskar" name="Fjöldi Fiska" data={props.data} pointWidth={20} />
            </YAxis>
            <Tooltip />
     </HighchartsChart>
    </div>
);

export default RiverChart;
////               <LineSeries id="fps" name="Fiskur á stöng" data={props.fps} />
/* <LineSeries id="fiskar" name="Fjöldi Fiska" data={props.data} /> */
import React from 'react'
import {  
    HighchartsChart, Chart, XAxis, YAxis, Title, LineSeries, Tooltip, ColumnSeries
    
} from 'react-jsx-highcharts';

const RiverChart = (props) => (       
    <div>
         <HighchartsChart>
         <Chart />
         <Title>{props.title}</Title>
            <XAxis categories={props.years}>
              <XAxis.Title>Ár</XAxis.Title>
            </XAxis>
     
            <YAxis id="number">
              <YAxis.Title>Veiddir Fiskar</YAxis.Title>
              {/* <LineSeries id="fiskar" name="Fjöldi Fiska" data={props.data} /> */}
              <ColumnSeries id="fiskar" name="Fjöldi Fiska" data={props.data} pointWidth={20} />
            </YAxis>
            <Tooltip />
     </HighchartsChart>
    </div>
);

export default RiverChart;
////               <LineSeries id="fps" name="Fiskur á stöng" data={props.fps} />
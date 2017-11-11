import React from 'react'
import {  
    HighchartsChart, Chart,  XAxis, YAxis, Title, ColumnSeries, Tooltip
} from 'react-jsx-highcharts';

const AllRiverChart = (props) => (       
    <div>
    Heildarveiði á íslandi frá 1974 til 2016
        <HighchartsChart>
            <Chart />
            <Title>{props.Title}</Title>
               <XAxis>
                 <XAxis.Title>Time</XAxis.Title>
               </XAxis>
        
               <YAxis id="number">
                 <YAxis.Title>Number of employees</YAxis.Title>
                 <ColumnSeries id="AllRivers" name="Fjöldi Fiska" data={props.data} pointWidth={20}  />
                 
               </YAxis>
               <Tooltip />
        </HighchartsChart>
    </div>
);

//    plotOptions: { series: {    pointWidth: 40   } }
//<LineSeries id="fps" name="Fiskur á stöng" data={props.fps} />
export default AllRiverChart;
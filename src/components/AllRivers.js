import React from 'react'
import {  
    HighchartsChart, Chart,  XAxis, YAxis, ColumnSeries, Tooltip
} from 'react-jsx-highcharts';
import '../styles/AllRivers.css'
const AllRiverChart = (props) => (       
    <div className="RiverChart">
    <h3>Heildarveiði á íslandi frá 1974 til 2016</h3>
        <HighchartsChart>
            <Chart />
               <XAxis>
                 <XAxis.Title>Time</XAxis.Title>
               </XAxis>
        
               <YAxis id="number">
                 <YAxis.Title>Heildar Fjöldi</YAxis.Title>
                 <ColumnSeries id="AllRivers" name="Fjöldi Fiska" data={props.data} pointWidth={20}  />
                 
               </YAxis>
               <Tooltip />
        </HighchartsChart>
    </div>
);

//    plotOptions: { series: {    pointWidth: 40   } }
//<LineSeries id="fps" name="Fiskur á stöng" data={props.fps} />
export default AllRiverChart;
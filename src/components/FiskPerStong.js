import React from 'react'
import {  
    HighchartsChart, Chart,  XAxis, YAxis, Title, ColumnSeries, Tooltip
} from 'react-jsx-highcharts';

const FiskarPerStong = (props) => (       
    <div>
        <HighchartsChart>
            <Chart />
            <Title>{props.title}</Title>
               <XAxis categories={props.years}>
                 <XAxis.Title>Time</XAxis.Title>
               </XAxis>
        
               <YAxis id="number">
                 <YAxis.Title>Fiskar per stöng[stk]</YAxis.Title>
                 <ColumnSeries id="FiskPerStong" name="Fjöldi Fiska per Stöng" data={props.fps} pointWidth={20}  />
                 
               </YAxis>
               <Tooltip />
        </HighchartsChart>
    </div>
);

//    plotOptions: { series: {    pointWidth: 40   } }
//<LineSeries id="fps" name="Fiskur á stöng" data={props.fps} />
export default FiskarPerStong;
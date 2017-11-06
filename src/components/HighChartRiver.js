import React,{ Component } from 'react'
import {  
    HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries    
} from 'react-jsx-highcharts';
import Highcharts from 'highcharts/js/highcharts'; // Highcharts styled mode
import {connect} from 'react-redux'

const RiverChart = (props) => (       
    <div>
        {console.log(props)}
        this is a RiverChart
        <HighchartsChart>
            <Chart />
            <Title>{props.Title}</Title>
               <XAxis>
                 <XAxis.Title>Time</XAxis.Title>
               </XAxis>
        
               <YAxis id="number">
                 <YAxis.Title>Number of employees</YAxis.Title>
                 <LineSeries id="fiskar" name="Fjöldi Fiska" data={props.data} />
                 <LineSeries id="fps" name="Fiskur á stöng" data={props.fps} />
               </YAxis>
        </HighchartsChart>
    </div>
);

export default RiverChart;

//<LineSeries id="manufacturing" name="Manufacturing" data={[24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]} />
//<LineSeries id="sales-distribution" name="Sales & Distribution" data={[11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]} />
//<LineSeries id="project-development" name="Project Development" data={[null, null, 7988, 12169, 15112, 22452, 34400, 34227]} />
//<LineSeries id="other" name="Other" data={[12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]} />
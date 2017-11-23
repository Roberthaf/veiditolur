import React from 'react'
import {  
    HighchartsChart, Chart, XAxis, YAxis, Title,  Tooltip, PieSeries
    
} from 'react-jsx-highcharts';
import '../styles/HighChartRiver.css'
const PieChart = (props) => (       
    <div className="RiverChart">
         <HighchartsChart>
         <Chart />
         <Title>{props.Title}</Title>
         <XAxis series={['AL','vl','nl']}>
         </XAxis>
     
            <YAxis id="number">
              <YAxis.Title>Veiddir Fiskar</YAxis.Title>
              
              <PieSeries id="fiskar_pie" 
              name={'Heildar veiði'} 
              data={ props.data }  />

            </YAxis>
            <Tooltip />
     </HighchartsChart>
    </div>
);

export default PieChart;
////               <LineSeries id="fps" name="Fiskur á stöng" data={props.fps} />
/* <LineSeries id="fiskar" name="Fjöldi Fiska" data={props.data} /> */
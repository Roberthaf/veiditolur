import React from 'react'
import {  
    HighchartsChart, Chart, XAxis, YAxis, Title,  Tooltip, BarSeries, Legend, ColumnSeries,
    
} from 'react-jsx-highcharts';
import '../styles/HighChartRiver.css'
const RiverChart = (props) => (       

    <div className="RiverChart">
    {console.log(props.data)}
         <HighchartsChart>
         <Chart />
         <Legend layout="vertical" align="right" verticalAlign="middle" />

         <Title>{props.title}</Title>
            <XAxis categories={['2016','2017','2018','2019','2020'] }>
              <XAxis.Title></XAxis.Title>
            </XAxis>
     
            <YAxis id="number">
              <YAxis.Title>Veiddir Fiskar</YAxis.Title>
    
              {props.data.map( (bars, index) => (
              console.log(bars.data[index]),
                                 
              <BarSeries 
                id={index}
                key={index}
                //name={bars.title[index]}
                //data={bars.data[index]}
                series={[]}
                name={'Veiðiár'}
              />
              
              )

              )};

            </YAxis>
            <Tooltip />
     </HighchartsChart>
    </div>
);

export default RiverChart;

/* 
                <ColumnSeries 
                  id="index" 
                  name={props.data[index]}
                  data={bars}
                />
*/


/*        {props.reggressionLines.map((rLines, index) => (
          <LineSeries
            key={index}
            id={`rLines${index}`}
            name={`Channel ${index + 1}`}
            data={rLines}
            color={"#FF0000"}
          />
        ))}
 */
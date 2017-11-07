import React from 'react'
import { Table } from 'react-bootstrap'

// var Rivers = [];
// function areaInstances(){
//     //console.log(database)
//     for (var key in database) {
//         if(database[key].area === "AL"){
//             Rivers.push(database[key].title)
//         }
//        }
//        this.state({
//         River : Rivers
//         })
// }

const SideBar = (props) => (
    <Table striped bordered condensed hover>
        <thead>
            <tr>
                <th>Veiðiár</th>
            </tr>
        </thead>
        <tbody>
            {props.Rivers.map((item, index) =>  
                <tr key={index}>
                    <td>
                        {item}
                    </td>
                </tr>
             )}    
        </tbody>
    </Table>    
)

export default SideBar;
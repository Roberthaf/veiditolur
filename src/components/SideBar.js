import React from 'react'
import { Table } from 'react-bootstrap'
import '../styles/SideBar.css'

const SideBar = (props) => (
    
    <Table striped bordered condensed hover>
        <thead>
            <tr>
                <th>Veiðiár</th>
            </tr>
        </thead>
        <tbody>
            
            {props.Rivers.map((item, index) =>  
                <tr key={index} id={item[1]} onClick={() => props.onClickHandler(item[1]) }>
                    <td>
                      {item[0]}
                    </td>
                </tr>
             )}    
        </tbody>
    </Table>    
)
// {console.log(props.Rivers)}
export default SideBar;
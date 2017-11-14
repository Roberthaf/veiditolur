import React from 'react'
import { Grid, TableView, TableHeaderRow, TableSelection } from '@devexpress/dx-react-grid-bootstrap3'
import { SelectionState } from "@devexpress/dx-react-grid";

const SideBarDev = (props) =>(
     <Grid
     rows={props.rows}
     columns={props.columns}
    >
        <SelectionState
            selection={props.selection}
            onSelectionChange={props.onSelectionChange}
        />

        <TableView />
        <TableHeaderRow />
        <TableSelection
            selectByRowClick
            highlightSelected
            showSelectionColumn={false}
        />
    </Grid>
  
);
export default SideBarDev;
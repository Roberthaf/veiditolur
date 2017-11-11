import React from 'react'
import {
    Grid, TableView, TableHeaderRow,PagingPanel
  } from '@devexpress/dx-react-grid-bootstrap3'
  import {
    PagingState,
    LocalPaging,
    LocalSorting,
    SortingState
  } from "@devexpress/dx-react-grid";
// Table for showing current years top rivers    LocalPaging,
    //SelectionState,
    //SortingState,
    //LocalSorting
const TableList = (props) => (
    
    <Grid
        rows={props.rows}
        columns={props.columns}
    >
    <SortingState
          sorting={this.state.sorting}
          onSortingChange={this.changeSorting}
        />
        <LocalSorting />
    <PagingState defaultCurrentPage={0} pageSize={8} />
    <LocalPaging />
    <LocalSorting />
    <TableView />
    <TableHeaderRow /> 
    <PagingPanel />
    </Grid>
);
export default TableList;
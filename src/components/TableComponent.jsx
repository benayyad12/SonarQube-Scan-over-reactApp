import React from 'react'
import { useMemo } from 'react';
import {
  MRT_Table, //import alternative sub-component if we do not want toolbars
  useMaterialReactTable,
} from 'material-react-table';
import { data } from '../assets/makeData';


const TableComponent = ( ) => {

    const today = new Date();
  
  //time custom! 
  function getDate() {
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    return `${date}/${month}/${ year}`;
    }
    
    function incrementDate(dateString) {
      const currentDate = new Date(dateString);
      currentDate.setDate(currentDate.getDate() + 1);
    
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
    
      return `${day}/${month}/${ year}`;
    }

  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'DiscVenue',
        header: 'Disc-Venue',
        size : 15
      },
      {
        header: `${getDate()}`,
        columns: [
      {
        accessorKey:"timeOne",
        header:"05:00",
        size : 20
      },
      
      {
        accessorKey:"timeTwo",
        header:"06:00",
        size : 20
      },
      {
        accessorKey:"timeThree",
        header:"07:00",
        size : 20
      },
      {
        accessorKey:"timeFour",
        header:"08:00",
        size : 20
      },
      {
        accessorKey:"timeFive",
        header:"09:00",
        size : 20
      },
      {
        accessorKey:"timeSix",
        header:"10:00",
        size : 20
      },
      {
        accessorKey:"timeSeven",
        header:"11:00",
        size : 20
      },
      {
        accessorKey:"timeEight",
        header:"12:00",
        size : 20
      },
      
      {
        accessorKey:"timeNine",
        header:"13:00",
        size : 20
      },
      
      {
        accessorKey:"timeTen",
        header:"14:00",
        size : 20
      },
      
      {
        accessorKey:"timeEleven",
        header:"15:00",
        size : 20
      },
      
      {
        accessorKey:"timeTwelve",
        header:"16:00",
        size : 20
      },
      
      {
        accessorKey:"timeThirteen",
        header:"17:00",
        size : 20

      },
      
      {
        accessorKey:"timeFourteen",
        header:"18:00",
        size : 20
      },
      {
        accessorKey:"timeFifteen",
        header:"19:00",
        size : 20
      },
      
      {
        accessorKey:"timeSixteen",
        header:"20:00",
        size : 20
      },
      
      {
        accessorKey:"timeSeventeen",
        header:"21:00",
        size : 20
      },
      {
        accessorKey:"timeEighteen",
        header:"22:00",
        size : 20
      },
      {
        accessorKey:"timeNineTeen",
        header:"23:00",
        size : 20
      },
      {
        accessorKey:"timeTwenty",
        header:"00:00",
        size : 20
      } ],
    },

      {
        header: `${incrementDate(today)}`,
        columns: [
      {
        accessorKey:"timeTwentyOne",
        header:"01:00",
        size : 20
      },
      
      {
        accessorKey:"timeTwentyTwo",
        header:"02:00",
        size : 20
      },
     ],
    },
    
    

    ],
    [],
    //end
  );
  <hr style="height:42px;border:none;color:#333;background-color:#333;"></hr>

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.default, //change default background color
    }),
    muiTableBodyRowProps: { hover: false },
    muiTableProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        fontStyle: 'italic',
        fontWeight: 'normal',
        

      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        padding :'0px 0px 0px 0px',
        margin :'0px 0px 0px 0px'

        

      },
    },
  });


  return (
   <>
    <div sx={{ overflow: "auto" }} >
    <div sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>

    
   <MRT_Table table={table}  style={{  margin : 0 }} />
   </div>
   </div>
   </>
  )
}

export default TableComponent



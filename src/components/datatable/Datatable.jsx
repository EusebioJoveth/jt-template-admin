import React from 'react';
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';


const Datatable = () => {
    const actionColum = [
        {
            field: "action",
            headerName: "Acções",
            width: 200,
            renderCell: ()=>{
                return(
                    <div className="cellAction">
                        <div className="viewButton">Ver</div>
                        <div className="deleteButton">Apagar</div>
                    </div>
                );
            },
        }
    ]
  return (
    <div className='datatable'>
         <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
        
    </div>
  )
}

export default Datatable
import {React, useState} from 'react';
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from "react-router-dom";


const Datatable = () => {
  const [data, setData] =useState(userRows);

  const handleDelete =(id)=>{
    setData(data.filter((item) => item.id !== id));
  };
  
    const actionColum = [
        {
            field: "action",
            headerName: "Acções",
            width: 200,
            renderCell: (params)=>{
                return(
                    <div className="cellAction">
                        <Link to="/users/test" style={{textDecoration: "none"}}>
                        <div className="viewButton">Ver</div>
                        </Link>
                       
                        <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Apagar</div>
                     
                    </div>
                );
            },
        }
    ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Adicionei Novo Utilizador
        <Link to="/users/new" style={{textDecoration: "none"}} className="link">
          Adicionar
        </Link>
      </div>
         <DataGrid className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
        
    </div>
  )
}

export default Datatable
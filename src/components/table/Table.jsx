import React from 'react'
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const linhas = [
        {
            id: 114323,
            product: "Computador Hp",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Kambulo Purcel",
            date: "1 de Março",
            amount: 270000,
            method: "Dinheiro de Entrega",
            status: "Pendente",
        },
        {
            id: 224323,
            product: "Playstation 5",
            img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Eusebio Joveth",
            date: "1 de Março",
            amount: 800000,
            method: "Pagamento online",
            status: "Aprovado",
        },
        {
            id: 334323,
            product: "HD externo",
            img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "José júnior",
            date: "1 de Março",
            amount:35000,
            method: "Transferência",
            status: "Aprovado",
        },
        {
            id: 144323,
            product: "Monitor LG",
            img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Ndongala Garcia",
            date: "1 de Março",
            amount: 102000,
            method: "Dinheiro de Entrega",
            status: "Pendente",
        }
    ];

  return ( 
         <TableContainer component={Paper} className='table '>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Id</TableCell>
            <TableCell className='tableCell'>Produto</TableCell>
            <TableCell className='tableCell'>Cliente</TableCell>
            <TableCell className='tableCell'>Data</TableCell>
            <TableCell className='tableCell'>Método de Pagamento</TableCell>
            <TableCell className='tableCell'>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {linhas.map((data) => (
            <TableRow key={data.id} >
              <TableCell className='tableCell'> {data.id} </TableCell>
              <TableCell className='tableCell'>
                  <div className="cellWrapper">
                      <img src={data.img} alt="" className='image' />
                      {data.product}
                  </div>
              </TableCell>
              <TableCell className='tableCell'>{data.customer}</TableCell>
              <TableCell className='tableCell'>{data.amount}</TableCell>
              <TableCell className='tableCell'>{data.method}</TableCell>
              <TableCell className='tableCell'>
                  <span className={`status ${data.status}`}>{data.status}</span>
              </TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
   
  )
}

export default List
import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import React from 'react';
import "./featured.scss";

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Rendimento Total</h1>
            <MoreVert fontSize='small'/>
        </div>
        <div className="buttom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total de vendas de hoje.</p>
            <p className="amount">$530</p>
            <p className="desc">
            Processamento de transações anteriores. Últimos pagamentos podem não ser incluídos.
            </p>
            <div className="summary">
                 <div className="item">
                     <div className="itemTitle">Alvo</div>
                     <div className="itemResult negative">
                         <KeyboardArrowDown fontSize='small' />
                         <div className="resultAmount">AKZ14.4k</div>
                     </div>
                 </div>
                 <div className="item">
                     <div className="itemTitle">Semana Passada</div>
                     <div className="itemResult positive">
                         <KeyboardArrowUpOutlined fontSize='small' />
                         <div className="resultAmount">AKZ14.4k</div>
                     </div>
                 </div>
                 <div className="item">
                     <div className="itemTitle">Mês Passado</div>
                     <div className="itemResult positive">
                         <KeyboardArrowUpOutlined fontSize='small' />
                         <div className="resultAmount">AKZ14.4k</div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
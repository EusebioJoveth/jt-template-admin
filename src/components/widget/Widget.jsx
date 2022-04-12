import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import "./widget.scss";

const Widget = ({type}) => {
    let data;

    //Temporário
    const amount = 100;
    const diff = 20;

    switch(type){
        case "Utilizador":
            data = {
                title: "UTILIZADORES",
                isMoney: false,
                link: "Veja todos utilizadores",
                icon: <PersonOutline className='icon' 
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255,0 ,0, 0.2)",
                }} />
            };
            break;
                    case "Pedido":
                        data = {
                            title: "PEDIDOS",
                            isMoney: false,
                            link: "Veja todos os pedidos",
                            icon: <ShoppingCartOutlined className='icon'
                            style={{
                                color: "goldenrod",
                                backgroundColor: "rgba(218, 165 ,32, 0.2)",
                            }}
                             />
                        };
                        break;
                        case "Ganho":
                    data = {
                        title: "GANHOS",
                        isMoney: true,
                        link: "Veja todos os ganhos líquidos",
                        icon: <MonetizationOnOutlined className='icon' 
                        style={{
                            color: "green",
                            backgroundColor: "rgba(0,128 ,0, 0.2)",
                        }}
                        />
                    };
                    break;
                    case "Balanço":
                        data = {
                            title: "BALANÇOS",
                            isMoney: true,
                            link: "Veja todos detalhes",
                            icon: <AccountBalanceWalletOutlined className='icon' 
                            style={{
                                color: "purple",
                                backgroundColor: "rgba(128,0 ,128, 0.2)",
                            }}
                            />
                        };
                        break;
            default:
                break;
    }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney && "AKZ"} {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="rigth">
            <div className="percentage positive">
                <KeyboardArrowUp />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
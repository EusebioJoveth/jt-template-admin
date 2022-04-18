import React from 'react';
import './single.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Actualizar</div>
            <h1 className="title">Informação</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className='itemImg' />
              <div className="details">
              <h1 className="itemTitle">Tatiana Adelina</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">tatianaAdelina@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Telefone:</span>
                <span className="itemValue">+244 925070174</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Endereço:</span>
                <span className="itemValue">Zango 3 QG, Viana. Luanda</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">País:</span>
                <span className="itemValue">Zango 3 QG, Viana. Luanda</span>
              </div>
            </div>
            </div>
  
          </div>
          <div className="right">

          </div>
        </div>
        <div className="bottom">

        </div>
      </div>
    </div>
  )
}

export default Single
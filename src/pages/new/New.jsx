import React from 'react';
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Adicionar Novo Utilizador</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file">
                  Imagem: <DriveFolderUploadOutlined className='icon'/>
                </label>
                <input type="file" id='file' style={{display: "none"}}/>
            </div>
              <div className="formInput">
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder='Eusebio' />
              </div>
              <div className="formInput">
                <label htmlFor="lastname">Sobrenome</label>
                <input type="text" placeholder='Joveth' />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='eusebio@gmail.com' />
              </div>
              <div className="formInput">
                <label htmlFor="phone">Telefone nº</label>
                <input type="text" placeholder='+244 935171658' />
              </div>
              <div className="formInput">
                <label htmlFor="password">Palavra Pass</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label htmlFor="address">Endereço</label>
                <input type="text" placeholder='Zango 3 Viana. Luanda' />
              </div>
              <div className="formInput">
                <label htmlFor="country">País</label>
                <input type="text" placeholder='Angola' />
              </div>
              <button>Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New
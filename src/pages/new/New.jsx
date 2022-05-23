import {React, useState} from 'react';
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import {createUser} from "./../../services/userService";

const New = ({inputs, title}) => {
  const [file, setFile] = useState("");

  const handleNew = (e) =>{
    e.preventDefault();

    createUser("").then(res =>{
      console.log(res)

    }).catch(error=>{
      console.log("Erro");
    });
  }

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              file
              ? URL.createObjectURL(file)
              :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            } alt="" />
          </div>
          <div className="right">
            <form onSubmit={handleNew}>
            <div className="formInput">
                <label htmlFor="file">
                  Imagem: <DriveFolderUploadOutlined className='icon'/>
                </label>
                <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display: "none"}}/>
            </div>
            
            {inputs.map((input)=>(
               <div className="formInput" key={input.id}>
               <label htmlFor="name">{input.label}</label>
               <input type={input.type} placeholder={input.placeholder} />
             </div>

             ))}
              <button type='submit'>Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New
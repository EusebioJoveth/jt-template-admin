import React from 'react'
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { CreditCard, InsertChart, LocalShipping, NotificationsNone, PsychologyOutlined, SettingsSystemDaydreamOutlined } from '@mui/icons-material';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="topo">
        <span className="logo">JovethTecnologia</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MENU</p>
          <li>
            <DashboardIcon  className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTA</p>
          <li>
            <PersonOutlineOutlinedIcon className='icon' />
            <span>Utilizadores</span>
          </li>
          <li>
            <CreditCard className='icon' />
            <span>Pedidos</span>
          </li>
          <li>
            <LocalShipping className='icon' />
            <span>Entregas</span>
          </li>
          <p className="title">ÚTIL</p>
          <li>
            <InsertChart className='icon' />
            <span>Estatísticas</span>
          </li>
          <li>
            <NotificationsNone className='icon' />
            <span>Notificações</span>
          </li>
          <p className="title">SERVIÇOS</p>
          <li>
            <SettingsSystemDaydreamOutlined className='icon' />
            <span>Saúde do sistema</span>
          </li>
          <li>
            <PsychologyOutlined className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlined className='icon' />
            <span>Definições</span>
          </li>
          <p className="title">UTILIZADOR</p>
          <li>
            <AccountCircleOutlinedIcon  className='icon'/>
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className='icon' />
           <span>Sair</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        
      </div>
    </div>
  )
}

export default Sidebar
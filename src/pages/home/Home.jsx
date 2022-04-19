import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="Utilizador"/>
            <Widget type="Pedido"/>
            <Widget type="Ganho"/>
            <Widget type="Balanço"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Últimos 6 Meses (Receitas)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Últimas Transações</div>
            <Table />
          </div>
        </div>
     </div>
  )
}

export default Home
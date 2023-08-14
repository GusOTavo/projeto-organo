import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";


function App() {

  const times = [
    {
      nome:'Programação',
      corFundo:'#D9F7E9',
      corDestaque:'#57C278'
    },{
      nome:'Front-end',
      corFundo:'#E8F8FF',
      corDestaque:'#82CFFA'
    },{
      nome:'Data Science',
      corFundo:'#F0F8E2',
      corDestaque:'#A6D157'
    },{
      nome:'Devops',
      corFundo:'#FDE7E8',
      corDestaque:'#E06B69'
    },{
      nome:'UX & Design',
      corFundo:'#FAE9F5',
      corDestaque:'#DB6EBF'
    },{
      nome:'Mobile',
      corFundo:'#FFF5D9',
      corDestaque:'#FFBA05'
    },{
      nome:'Inovação e Gestão',
      corFundo:'#FFEEDF',
      corDestaque:'#FF8A29'
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corDestaque={time.corDestaque} 
      corFundo={time.corFundo}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />

    </div>
  );
}

export default App;

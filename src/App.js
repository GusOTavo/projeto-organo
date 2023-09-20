import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIA KENOBI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://img.freepik.com/fotos-gratis/linda-jovem-latina-retrato-de-rosto_53876-143238.jpg?w=740&t=st=1695221393~exp=1695221993~hmac=752ba5f3d53a73d0c537ed0fe8d57267a85aab528efd0c629af1bf89d3851bb3',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'RICARDO SKYWALKER',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://img.freepik.com/fotos-premium/a-man-with-curly-hair-and-a-brown-shirt-is-standing-against-a-white-background_910054-9974.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MARIO VADER',
      cargo: 'Desenvolvedor Python e JavaScript na Empresa',
      imagem: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'LEIA ORGANA',
      cargo: 'Hipster e Desenvolvedora de Jogos Mobile',
      imagem: 'https://images.pexels.com/photos/2014864/pexels-photo-2014864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIA KENOBI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://img.freepik.com/fotos-gratis/linda-jovem-latina-retrato-de-rosto_53876-143238.jpg?w=740&t=st=1695221393~exp=1695221993~hmac=752ba5f3d53a73d0c537ed0fe8d57267a85aab528efd0c629af1bf89d3851bb3',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'RICARDO SKYWALKER',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://img.freepik.com/fotos-premium/a-man-with-curly-hair-and-a-brown-shirt-is-standing-against-a-white-background_910054-9974.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MARIO VADER',
      cargo: 'Desenvolvedor Python e JavaScript na Empresa',
      imagem: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEIA ORGANA',
      cargo: 'Hipster e Desenvolvedora de Jogos Mobile',
      imagem: 'https://images.pexels.com/photos/2014864/pexels-photo-2014864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIA KENOBI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://img.freepik.com/fotos-gratis/linda-jovem-latina-retrato-de-rosto_53876-143238.jpg?w=740&t=st=1695221393~exp=1695221993~hmac=752ba5f3d53a73d0c537ed0fe8d57267a85aab528efd0c629af1bf89d3851bb3',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'RICARDO SKYWALKER',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://img.freepik.com/fotos-premium/a-man-with-curly-hair-and-a-brown-shirt-is-standing-against-a-white-background_910054-9974.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MARIO VADER',
      cargo: 'Desenvolvedor Python e JavaScript na Empresa',
      imagem: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEIA ORGANA',
      cargo: 'Hipster e Desenvolvedora de Jogos Mobile',
      imagem: 'https://images.pexels.com/photos/2014864/pexels-photo-2014864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIA KENOBI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://img.freepik.com/fotos-gratis/linda-jovem-latina-retrato-de-rosto_53876-143238.jpg?w=740&t=st=1695221393~exp=1695221993~hmac=752ba5f3d53a73d0c537ed0fe8d57267a85aab528efd0c629af1bf89d3851bb3',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'RICARDO SKYWALKER',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://img.freepik.com/fotos-premium/a-man-with-curly-hair-and-a-brown-shirt-is-standing-against-a-white-background_910054-9974.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MARIO VADER',
      cargo: 'Desenvolvedor Python e JavaScript na Empresa',
      imagem: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'LEIA ORGANA',
      cargo: 'Hipster e Desenvolvedora de Jogos Mobile',
      imagem: 'https://images.pexels.com/photos/2014864/pexels-photo-2014864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIA KENOBI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://img.freepik.com/fotos-gratis/linda-jovem-latina-retrato-de-rosto_53876-143238.jpg?w=740&t=st=1695221393~exp=1695221993~hmac=752ba5f3d53a73d0c537ed0fe8d57267a85aab528efd0c629af1bf89d3851bb3',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'RICARDO SKYWALKER',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://img.freepik.com/fotos-premium/a-man-with-curly-hair-and-a-brown-shirt-is-standing-against-a-white-background_910054-9974.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MARIO VADER',
      cargo: 'Desenvolvedor Python e JavaScript na Empresa',
      imagem: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'LEIA ORGANA',
      cargo: 'Hipster e Desenvolvedora de Jogos Mobile',
      imagem: 'https://images.pexels.com/photos/2014864/pexels-photo-2014864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIA KENOBI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://img.freepik.com/fotos-gratis/linda-jovem-latina-retrato-de-rosto_53876-143238.jpg?w=740&t=st=1695221393~exp=1695221993~hmac=752ba5f3d53a73d0c537ed0fe8d57267a85aab528efd0c629af1bf89d3851bb3',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'RICARDO SKYWALKER',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://img.freepik.com/fotos-premium/a-man-with-curly-hair-and-a-brown-shirt-is-standing-against-a-white-background_910054-9974.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MARIO VADER',
      cargo: 'Desenvolvedor Python e JavaScript na Empresa',
      imagem: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEIA ORGANA',
      cargo: 'Hipster e Desenvolvedora de Jogos Mobile',
      imagem: 'https://images.pexels.com/photos/2014864/pexels-photo-2014864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;

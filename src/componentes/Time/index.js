import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const fundo = { backgroundColor: props.corFundo };
    const destaque = { borderColor: props.corDestaque }

    // condicional no react => &&

    return ( 
        props.colaboradores.length > 0 && <section className='time' style={fundo}>
            <h3 style={destaque}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corDestaque} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time;


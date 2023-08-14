import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/img/fb.png" alt="Logo do Facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/img/tw.png" alt="Logo do Twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/img/ig.png" alt="Logo do Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/img/logo.png" alt="Logo do Organo" />
        </section>
        <section>
            <p>
                Desenvolvido por <br/> Gustavo Henrique L. M. de Sousa
            </p>
        </section>
    </footer>)
}

export default Rodape
import React from 'react';
import {Link} from 'react-router-dom';
//icons
import {FiLogIn} from 'react-icons/fi'
//styles
import './styles.css';

//Image
import logo from '../../assets/logo.svg';

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta"></img>
                </header>
                
                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p> Ajudamos pessoas a encontrarem pontos de coleta de formar eficiente.</p>

                    <Link to="create-point">
                        <span>
                            <FiLogIn/>
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;
// import { useEffect, useState } from "react"

// const nomeDaFuncao = () => {
//         estados (useState) useEffect, etc
//     return SÓ HTML
// }

import { HomeStyle } from './style';
import homeLogo from '../../assets/images/homeLogo.png';
import bolinha from '../../assets/images/bolinha.png';
import listrinha from '../../assets/images/listrinha.png';
import rosinha from '../../assets/images/rosinha.png';
import sombra1 from '../../assets/images/sombra1.png';
import botao from '../../assets/images/botao.png';

const Home = () => {

    return (
        <HomeStyle>
            <div className="logo">
                <img src={homeLogo} />
                <span>Marcola's Tracker</span>
                <h1>Leve felicidade para o mundo</h1>
                <p className="visita">Visite orfanatos e mude o dia de muitas crianças.</p>
                <div className="local">
                    <p className="cidade">Caxias do Sul</p>
                    <p className="estado">Rio Grande do Sul</p>
                </div>
            </div>
            <div className="avatares">
                <img src={listrinha} className="listrinha"/>
                <img src={rosinha} className="rosinha"/>
                <img src={bolinha} className="bolinha" />

            </div>
            {/* <div className="sombras">
                <img src={sombra1} className="sombraRosinha" />
                <img src={sombra1} className="sombraListrinha" />
                <img src={sombra1} className="sombraBolinha" />
            </div> */}
            <img src={botao} className="botao" />
        </HomeStyle>
    )
}

export default Home 
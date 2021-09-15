// import { useEffect, useState } from "react"

// const nomeDaFuncao = () => {
//         estados (useState) useEffect, etc
//     return SÓ HTML
// }

import homeLogo from '../../assets/homeLogo.png';
import { HomeStyle } from './style';

const Home = () => {

    return (
        <HomeStyle>
            <div className="logo">
                <img src={homeLogo} />
                <span>Marcola's Tracker</span>
            </div>
            <h2>Teste</h2>
        </HomeStyle>
    )
}

export default Home 
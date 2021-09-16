// import { useEffect, useState } from "react"

// const nomeDaFuncao = () => {
//         estados (useState) useEffect, etc
//     return SÓ HTML
// }

import { HomeStyle } from './style';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Logo from '../../components/Logo';
import Illustration from '../../components/Illustration';
import Local from '../../components/Local';
import MarcolaTitle from '../../components/MarcolaTitle';
import ButtonGo from '../../components/ButtonGo'

const Home = () => {

    return (
        <HomeStyle>
            <div className="right-information">
                <Logo />
                <MarcolaTitle />
                <Title />
                <Subtitle />
            </div>
            <div className="left-information">
                <Local />
                <Illustration />
                <ButtonGo />
            </div>
        </HomeStyle>
    )
}

export default Home 
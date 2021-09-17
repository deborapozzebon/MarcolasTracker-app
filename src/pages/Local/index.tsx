import { LocalStyle } from './style';
import Title from '../../components/Title';
import Logo from '../../components/Logo';

const Local = () => {
    return (
        <LocalStyle>
            <div className="logo-local">
                <Logo />
            </div>
            <div className="titulo-local"><Title /></div>
        </LocalStyle>        
    )
}

export default Local 
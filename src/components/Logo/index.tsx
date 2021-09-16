import { LogoStyle } from './style';
import logo from '../../assets/images/logo.png';

const Logo = () => {
    return (
        <LogoStyle>
            <img src={logo} />            
        </LogoStyle>

    )
}

export default Logo 
import { IllustrationStyle } from './style'; 
import illustration from '../../assets/images/illustration.png';

const Illustration = () => { 
    return (
        <IllustrationStyle>
            <img src={illustration} />
        </IllustrationStyle>
    )
}

export default Illustration 
import { FormStyle } from './style'; 
import { FormLabelUpStyle } from '../../components/FormLabelUp/style';
import { FormLabelDownStyle } from '../../components/FormLabelDown/style';
import { AddPictureStyle } from '../../components/AddPicture/style';
import logo from '../../assets/images/logo.png';
import ButtonConfirm from '../../components/ButtonConfirm';
import FormMapCenter from '../../components/FormMapCenter';
import ButtonBack from '../../components/ButtonBack';
import { Link } from 'react-router-dom';


const Form = () => {

    return (
        <FormStyle>
            <div id="rectangle">
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/"><img src={logo} /></Link>
                                <Link to="/local"><ButtonBack /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <p className="top">Adicione um orfanato</p>
            <fieldset className="rectangle">  
                <h1>Dados</h1> 
                <div id="linha-horizontal"></div>   
                <FormMapCenter />                  
                <FormLabelUpStyle>
                    <label>
                        Nome
                        <input name="name" type="text"></input>                    
                    </label>
                </FormLabelUpStyle>
                <FormLabelDownStyle>
                    <label>
                        Sobre
                        <input name="name" type="text"></input>                    
                    </label>
                </FormLabelDownStyle>
                <p className="max">Máximo de 300 caracteres</p>
                <FormLabelUpStyle>
                    <label>
                        Número de Whats App
                        <input name="name" type="text"></input>                    
                    </label>
                </FormLabelUpStyle>
                <AddPictureStyle>
                    <label>
                        Fotos
                        <input name="name" type="text"></input>
                    </label>
                </AddPictureStyle>
                <h1>Visitação</h1>
                <div id="linha-horizontal"></div>  
                <FormLabelDownStyle>
                    <label>
                        Instruções 
                        <input name="name" type="text"></input>                    
                    </label>
                </FormLabelDownStyle>
                <FormLabelUpStyle>
                    <label>
                        Horários das visitas
                        <input name="name" type="text"></input>                    
                    </label>
                </FormLabelUpStyle>
                <p className="weekend">Atende fim de semana?</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="complete"><ButtonConfirm /></Link>
                        </li>
                    </ul>
                </nav>
            </fieldset>        
        </FormStyle>
    )
}

export default Form 
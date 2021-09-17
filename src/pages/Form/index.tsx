import { FormStyle } from './style'; 
import { FormLabelUpStyle } from '../../components/FormLabelUp/style';
import { FormLabelDownStyle } from '../../components/FormLabelDown/style';
import { AddPictureStyle } from '../../components/AddPicture/style';

const Form = () => {

    return (
        <FormStyle>
            <fieldset className="rectangle">  
                <h1>Dados</h1>                           
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
                <AddPictureStyle>
                    <label>
                        Fotos
                        <input name="name" type="text"></input>
                    </label>
                </AddPictureStyle>
                <h1>Visitação</h1>
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
            </fieldset>        
        </FormStyle>
    )
}

export default Form 
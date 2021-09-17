import PublicRouter from './PublicRouter';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from '../pages/Home';
import Local from '../pages/Local';
import Form from '../pages/Form';

const Routes = () => {
    return (
        // BrowserRouter informa a aplicação que haverá roteamento 
        // Switch armazena as rotas e define as trocas 
        // PublicRouter 
        <BrowserRouter> 
            <Switch>
                <PublicRouter path="/" exact={true} Component={Home} />
                <PublicRouter path="/local" exact={true} Component={Local} />   
                <PublicRouter path="/form" exact={true} Component={Form} />            
            </Switch>
        </BrowserRouter>
    )
}

export default Routes 
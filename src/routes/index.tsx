import PublicRouter from './PublicRouter';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from '../pages/Home';
import Local from '../pages/Local';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRouter path="/" exact={true} Component={Home} />
                <PublicRouter path="/local" exact={true} Component={Local} />               
            </Switch>
        </BrowserRouter>
    )
}

export default Routes 
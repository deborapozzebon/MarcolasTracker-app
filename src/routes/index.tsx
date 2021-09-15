import PublicRouter from './PublicRouter';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Home from '../pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRouter path="/" exact={true} Component={Title} />
                <PublicRouter path="/amanda" exact={true} Component={Subtitle} />
                <PublicRouter path="/home" exact={true} Component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes 
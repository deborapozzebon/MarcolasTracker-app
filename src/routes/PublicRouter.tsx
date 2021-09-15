import { Route, Redirect } from 'react-router-dom'; 

interface IPublicRouter {
    path: string,
    exact: boolean,
    Component: any,
}

const PublicRouter = ({path, exact, Component}: IPublicRouter) => {
    return (
        <Route path={path} exact={exact} render={(props) => (
            <Component {...props}/>    
        )} />
    )
}

export default PublicRouter
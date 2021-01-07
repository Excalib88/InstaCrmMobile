import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Product from './Product';
import Auth from './Auth';
import Main from './Main';
import Register from './Register';
import { useAuth, authFetch, login, logout} from '../AuthProvider';
import IdentityMain from './IdentityMain/IdentityMain';

export const Router = () => {
    const [logged] = useAuth();

    return <BrowserRouter>
            <Switch>
                {!logged && <>
                    <Route path="/register" component={Register}/>
                    <Route path="/auth" component={Auth}/>
                    <Route path="/identity" component={IdentityMain}/>
                    <Redirect to="/identity"/>
                </>}
                {
                    logged && <>
                        <Route path="/main" component={Main}/>
                        <Route path="/product" component={Product}/>
                        <Redirect to="/main" />
                    </>
                }
            </Switch>
        </BrowserRouter>;
};

export default Router;
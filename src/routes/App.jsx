import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import NewPass from '../containers/NewPass';
import RecoveryPass from '../containers/RecoveryPass';
import Home from '../pages/Home';
import NotFound from '../pages/error404';
import '../styles/global.css';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/new-pass' component={NewPass} />
                    <Route exact path='/recovery-pass' component={RecoveryPass} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
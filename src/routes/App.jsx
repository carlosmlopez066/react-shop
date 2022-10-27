import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import MyOrder from '../pages/MyOrder';
import Orders from '../pages/Orders';
import MyAccount from '../pages/MyAccount'
import Login from '../pages/Login';
import NewPass from '../pages/NewPass';
import RecoveryPass from '../pages/RecoveryPass';
import EditAccount from '../pages/EditAccount';
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
                    <Route exact path='/my-account' component={MyAccount} />
                    <Route exact path='/edit-account' component={EditAccount} />
                    <Route exact path='/my-order' component={MyOrder} />
                    <Route exact path='/orders' component={Orders} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
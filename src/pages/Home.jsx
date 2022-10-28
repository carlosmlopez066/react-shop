import React from 'react';
import Header from '@components/Header'
import ProductListContainer from '@containers/ProductList-container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Home = () => {
    return (
        <BrowserRouter>
            <Header />
            <ProductListContainer />
        </BrowserRouter>
    );
};

export default Home;
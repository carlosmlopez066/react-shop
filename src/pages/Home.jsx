import React from 'react';
import Header from '../components/Header'
import ProductList from '../components/ProductList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Home = () => {
    return (
        <BrowserRouter>
            <Header />
            <ProductList />
        </BrowserRouter>
    );
};

export default Home;
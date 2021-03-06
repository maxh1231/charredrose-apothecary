import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Candles from './Pages/Candles'
import BurnCollection from './Pages/BurnCollection';
import Viles from './Pages/Viles';
import Jewelry from './Pages/Jewelry';

const uploadLink = createUploadLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, uploadLink]),
  cache: new InMemoryCache({

  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/candles" element={<Candles />} />
          <Route exact path="/products/burncollection" element={<BurnCollection />} />
          <Route exact path="/products/viles" element={<Viles />} />
          <Route exact path="/products/jewelry" element={<Jewelry />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

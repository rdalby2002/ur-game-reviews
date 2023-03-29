import React from 'react';
import {ApolloClient, ApolloProvider} from '@apollo/client'
import { Router, Route, Routes } from 'express';

import Home from './pages/Home';
import Layout from './pages/Layouts/Layout';
import Navbar from './components/Navbar';
import NewReleases from './pages/NewReleases';
import TopRated from './pages/TopRated';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  },
  uri: "/graphql"
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Layout />
          <Navbar>
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/toprated" 
                element={<TopRated />} 
              />
              <Route 
                path="/newreleases" 
                element={<NewReleases />} 
              />
            </Routes>
          </div>
          </Navbar>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

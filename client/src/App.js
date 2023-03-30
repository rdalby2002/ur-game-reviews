import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import TopRated from './pages/TopRated';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layouts/Layout';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          
          <div className="container">
            <Routes>
              <Route 
                exact path="/"
                element ={<Home />}
              />
              <Route 
                path="/login"
                element={<LoginForm />}
              />
              <Route 
                path="/signup"
                element={<SignupForm />}
              />
              <Route 
                path="/toprated"
                element={<TopRated />}
              />
              <Route 
                path="/profiles/:username"
                element={<Dashboard />}
              />
            
            </Routes>
          </div>
         
        </div>
      </Router>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
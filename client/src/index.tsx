import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client: ApolloClient<any> = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider >
);

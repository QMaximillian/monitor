import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

const MONITOR_BASE_URL = "http://localhost:8000/graphql";

const httpLink = createHttpLink({
  uri: MONITOR_BASE_URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      AUTHORIZATION: token ? token : ""
    }
  };
});



// const httpLink = new HttpLink({
//   uri: MONITOR_BASE_URL,
// //   headers: {
// //     authorization: `
// //       process.env.REACT_APP_MONITOR_PERSONAL_ACCESS_TOKEN
// //     }`
// //   }
// });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

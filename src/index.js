import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import {ApolloProvider} from 'react-apollo'
import { getMainDefinition } from "apollo-utilities";
import { ApolloLink, split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";




const MONITOR_BASE_URL = `http://localhost:8000/graphql`

const httpLink = new HttpLink({
  uri: MONITOR_BASE_URL,
  headers: {
    authorization: localStorage.getItem("token")
      ? localStorage.getItem("token")
      : ""
  }
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8000/graphql`,
  options: {
    reconnect: true
  }
})

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return (
      kind === 'OperationDefinition' && operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const link = ApolloLink.from([terminatingLink])

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link
});





ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// React에 Apollo Client 연결 (앱 내의 모든 컴포넌트에서 GraphQL API 연동)
import { ApolloProvider } from 'react-apollo'; // Apollo 클라이언트를 React에서 사용하기 위한 바인딩을 제공
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from './apolloClient';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

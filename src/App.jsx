/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import './App.css';
import Router from './components/Router';
// eslint-disable-next-line import/no-named-as-default
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </div>
  );
}

export default App;

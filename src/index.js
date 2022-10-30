import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Index } from './components/SideMenuComponent';


// Routes Pages Import
import { RoutesPages } from './pages/RoutesPages';


export const App = () => {
  return(
    <>
      <RoutesPages/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

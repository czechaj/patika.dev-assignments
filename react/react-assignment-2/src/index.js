import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
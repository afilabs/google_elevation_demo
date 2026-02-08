import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import App from './App.jsx';

// Deps
import './main.scss';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <App />
   </StrictMode>,
);

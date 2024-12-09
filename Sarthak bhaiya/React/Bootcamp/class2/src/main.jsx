import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CharacterProvider } from './Context/CharacterContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <CharacterProvider>
    <App />
  </CharacterProvider>,
  </StrictMode>,
)

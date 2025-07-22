import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { GenreProvider } from './context/genrecontext.tsx'
import { SearchProvider } from './context/searchcontext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>   
    <BrowserRouter>
     <SearchProvider>
      <GenreProvider>
       <App />
      </GenreProvider>
    </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)

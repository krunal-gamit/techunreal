import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import './index.css'
import Header from './Header.jsx'
import HoverVideoCardGrid from './HoverVideoCard.jsx' 
import About from './About.jsx'
import Workwithus from './Workwithus.jsx'
import Grid from './Grid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <HoverVideoCardGrid />
      <About />
      <Workwithus /> 
      <Grid /> 
    </BrowserRouter>
  </StrictMode>
)

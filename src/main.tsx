import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// import * as React from 'react'
//
// import * as ReactDOM from 'react-dom/client'
//
// import App from './App.tsx'
// import './index.css'
//
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import About from './routData/about.jsx'
import Resume from './routData/resume.jsx'
import Portfolio from './routData/portfolio.jsx'
import Contact from './routData/contact.jsx'
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element= {<App />}>
          <Route path='' element= {<About />} />
          <Route path='Resume' element= {<Resume />} />
          <Route path='Portfolio' element= {<Portfolio />} />
          <Route path='Contact' element= {<Contact />} />

    </Route>
    )
  )

// const router = createBrowserRouter(
//   createRoutesFromElements (
//     <Route path='/' element={<App />} >
//         <Route path='' element={<Home />} />
//         <Route path='/About' element={<About />} />
//         <Route path='/Countary' element={<Countary />} />
//         <Route path='/Contact' element={<Contact />} />
        
//     </Route>
    
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

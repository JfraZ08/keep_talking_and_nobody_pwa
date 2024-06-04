import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homeview from './views/HomeView.tsx';
import AboutView from './views/AboutView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homeview/> 
  },
  {
    path: '/about',
    element: <AboutView/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <nav>
      <ul>
        <li><a href={'/'}>home</a></li>
        <li><a href={'/about'}>about</a></li>
      </ul>
    </nav>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

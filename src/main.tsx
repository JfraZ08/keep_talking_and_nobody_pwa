import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homeview from './views/HomeView.tsx';
import FilView from './views/FilView.tsx';
import ButtonComponent from './views/ButtonView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homeview/> 
  },
  {
    path: '/about',
    element: <FilView/>
  },
  {
    path: '/button',
    element: <ButtonComponent/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <nav>
      <ul>
        <li><a href={'/'}>home</a></li>
        <li><a href={'/about'}>Fils</a></li>
        <li><a href={'/button'}>String Button</a></li>
      </ul>
    </nav>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom'
/* import reactLogo from './assets/react.svg' */
import viteLogo from '/vite.svg'
import 'tdesign-mobile-react/es/style/index.css';
import 'remixicon/fonts/remixicon.css'
import './App.css'

import { HomePage, RecordPage, PayMentPage } from 'page'


export const RouterMap = [
  {
    index: true,
    element: <HomePage />,
    path: '/'
  },
  {
    element: <RecordPage />,
    path: '/record'
  },
  {
    element: <PayMentPage />,
    path: '/payment'
  },
  

  /* { path: "*", Component: Root }, */
]

const router = createBrowserRouter(RouterMap);

export default function App(): ReactElement {

  return (
    <RouterProvider router={router} />
  )
}


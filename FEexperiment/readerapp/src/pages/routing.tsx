import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Welcome from './Welcome'
import React from 'react'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        loader: async ({ params, request }) => {
          return new Promise((res) => {
            // Simulate async data fetch
            setTimeout(res, 1000, ({
              someAsyncData: true,
              params,
              queryParams: Object.fromEntries(
                  new URLSearchParams(request.url.split("?")[1]).entries()
              ),
          }))});
        },
        
        element: <About />,
      },
    ],
  },
  // not in the layout wrapper
  {
    path: '/welcome/:name',
    element: <Welcome />,
  }
])


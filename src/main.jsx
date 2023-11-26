import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Layout from './components/Layout.jsx'
import List from './pages/List.jsx'
import Form from './pages/Form.jsx'
import Page404 from './pages/Page404.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/tasks/create",
        element: <Form />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

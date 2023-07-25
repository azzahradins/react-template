import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Landing from '../views/Public/Landing'
import InternalError from '../views/Public/500'
import PageNotFound from '../views/Public/404'

import Login from '../views/Authorization/Login'
  
const routes = createBrowserRouter([
  { path: '/', element: <Landing />, exact: true },
  { path: '/login', element: <Login />, exact: true },
  { path: '/500', element: <InternalError />, exact: true},
  { path: '*', element: <PageNotFound />, exact: true}
])

export default routes



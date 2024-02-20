import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes({isLoggedIn}) {
  if(isLoggedIn){
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoutes;
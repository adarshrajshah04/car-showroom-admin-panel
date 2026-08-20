import React from 'react'
import { Outlet ,Navigate } from 'react-router-dom'


export const Private = () => {
    const token = sessionStorage.getItem("Token")
  return (
    
    <div>
        {token?<Outlet/>:<Navigate to={'/login'}/>}
    </div>
  )
}

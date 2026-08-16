import React from 'react'
import MyNavbar from './MyNavbar'
import MySidebar from './MySidebar';
import { Outlet } from 'react-router-dom';
Outlet

const Layout = () => {
    const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div>
        <MyNavbar setCollapsed={setCollapsed} collapsed={collapsed} />
        <div className='flex'>
            <MySidebar collapsed={collapsed}/>
            <div className='w-full h-full px-10 py-5'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout
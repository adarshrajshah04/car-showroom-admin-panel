import React from 'react'
import MyNavbar from './MyNavbar'
import MySidebar from './MySidebar';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className='overflow-hidden'>
        <MyNavbar setCollapsed={setCollapsed} collapsed={collapsed} />
        <div className='flex'>
            <MySidebar collapsed={collapsed}/>
            <div className='flex-1 min-w-0  h-screen px-10 py-5  bg-[#0D0D0D] '>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout
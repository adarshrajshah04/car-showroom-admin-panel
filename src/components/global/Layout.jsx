import React from 'react'
import MyNavbar from './MyNavbar'
import MySidebar from './MySidebar';

const Layout = () => {
    const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div>
        <MyNavbar setCollapsed={setCollapsed} collapsed={collapsed} />
        <div>
            <MySidebar collapsed={collapsed}/>
        </div>
    </div>
  )
}

export default Layout
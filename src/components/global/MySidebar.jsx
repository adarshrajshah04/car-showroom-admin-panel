import React from 'react'
import { Sidebar, Menu, MenuItem,SubMenu } from "react-pro-sidebar";
import { FaTags } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { ImHome } from "react-icons/im";


const MySidebar = ({collapsed}) => {
  return (
    <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem
          icon={<ImHome />}> Dashboard</MenuItem>

          <SubMenu
          label='Brands'
          icon={<FaTags />}>
            <MenuItem
            icon={<BiSolidCategory />}> All-Brands</MenuItem>
            <MenuItem
            icon={<FaPlus />}> Add-brands</MenuItem>
          </SubMenu>

          <SubMenu
          label='Cars'
          icon={<IoCarSport />
}>
            <MenuItem
            icon={<BiSolidCategory />}> All-Brands</MenuItem>
            <MenuItem
            icon={<FaPlus />}> Add-brands</MenuItem>
          </SubMenu>
          
        </Menu>
      </Sidebar>
    
       
      
   
  )
}

export default MySidebar
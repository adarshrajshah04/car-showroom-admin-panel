import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaTags } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const MySidebar = ({ collapsed }) => {
  return (
    <Sidebar className="shrink-0"  collapsed={collapsed}>
      <div className=" flex justify-center mt-5 mb-2">
        <img src={logo} alt="" className="w-[50%]  " />
      </div>
      <Menu>
        <MenuItem icon={<ImHome />} 
        component={<Link to={'/home'}/>}> Dashboard</MenuItem>

        <SubMenu label="Brands" icon={<FaTags />}>
          
            <MenuItem icon={<BiSolidCategory />}
            component={<Link to={'/brands'}/>}> All-Brands</MenuItem>
          

          <MenuItem icon={<FaPlus />}
          component={<Link to='/create-brand'/>}> Add-brands</MenuItem>
        </SubMenu>

        <SubMenu label="Cars" icon={<IoCarSport />}>
          <MenuItem icon={<BiSolidCategory />}
          component={<Link to={'/model'}/>}> All-Cars</MenuItem>
          <MenuItem icon={<FaPlus />}
          component={<Link to={'/create-model'} />}> Add-Cars</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default MySidebar;

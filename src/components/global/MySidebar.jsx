import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaTags } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

const MySidebar = ({ collapsed }) => {
  return (
    <Sidebar className="shrink-0"  collapsed={collapsed}>
      <Menu>
        <MenuItem icon={<ImHome />}> Dashboard</MenuItem>

        <SubMenu label="Brands" icon={<FaTags />}>
          
            <MenuItem icon={<BiSolidCategory />}
            component={<Link to={'/brands'}/>}> All-Brands</MenuItem>
          

          <MenuItem icon={<FaPlus />}
          component={<Link to='/create-brand'/>}> Add-brands</MenuItem>
        </SubMenu>

        <SubMenu label="Cars" icon={<IoCarSport />}>
          <MenuItem icon={<BiSolidCategory />}> All-Cars</MenuItem>
          <MenuItem icon={<FaPlus />}
          component={<Link to={'/create-model'} />}> Add-Cars</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default MySidebar;

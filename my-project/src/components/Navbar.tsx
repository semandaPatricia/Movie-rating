//import React, { Component } from 'react';
import { MenuMenu, MenuItem, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; //  using React Router for navigation

const Navbar = () => {
  return (
    <Menu secondary>
      <MenuItem as={Link} to='/' name='home' />
      <MenuItem as={Link} to='/ratings' name='ratings' />
      
      <MenuMenu position='right'>
        <MenuItem>
          <Input icon='search' placeholder='Search...' />
        </MenuItem>
        <MenuItem as={Link} to='/auth' name='logout' />
      </MenuMenu>
    </Menu>
  );
};

export default Navbar;

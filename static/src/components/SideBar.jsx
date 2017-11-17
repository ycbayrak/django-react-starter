import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './SideBar.scss';

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="SideBar">
        <p> Dashboard </p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Locations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Products</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Settings</p>
        <Nav vertical>
          <NavLink href="#">Account Settings</NavLink>
          <NavLink href="#">Dashboard Settings</NavLink>
          <NavLink href="#">Theme Settings</NavLink>
        </Nav>
        <hr />
        <p>Account</p>
        <Nav vertical>
          <NavLink href="#">Logout</NavLink>
        </Nav>

      </div>
    );
  }
}
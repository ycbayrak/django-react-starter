import React, {Component} from 'react'
import ReactDOM from 'react-dom';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './Navbar.scss';

export default class Header extends Component {
      constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    dropDownToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
    render() {
        return (
        <div className="Header">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">DJReact</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Login</NavLink>
              </NavItem>
              <NavItem>
                      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropDownToggle.bind(this)}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
        )
    }
}
import React from 'react'
import '../styles/Navbar.css'
import {
    Navbar, Nav, NavItem, NavDropdown, MenuItem
} from 'react-bootstrap'
import { history } from '../router/AppRouter'
function handleSelect(selectedKey) {
  history.push("/");
  //alert(`selected ${selectedKey}`);

}

const NavBar = (props) => (
    <Navbar className="Navbar-main" inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Veiditölur</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav activeKey={1} >
        <NavItem onSelect={handleSelect} eventKey={1} href="/" >Heim</NavItem>
          <NavDropdown eventKey={2} title="Landshlutar" id="basic-nav-dropdown">
            <MenuItem eventKey={2.1} href="/austurland">Austurland</MenuItem>
            <MenuItem eventKey={2.2} href="/Nausturland">Norð Austurland</MenuItem>
            <MenuItem eventKey={2.3} href="/Nvesturland">Norð Vesturland</MenuItem>
            <MenuItem eventKey={2.4} href="/vesturland">Vesturland</MenuItem>
            <MenuItem eventKey={2.5} href="/vestfirdir">Vestfirði</MenuItem>
            <MenuItem eventKey={2.6} href="/sudurland">Suðurland</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="">Link Right</NavItem>
          <NavItem eventKey={2} href="">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);
export default NavBar;
import React from 'react'
import '../styles/Navbar.css'
import { 
  Navbar, Nav, NavItem, NavDropdown, MenuItem
} from 'react-bootstrap'
import { history } from '../router/AppRouter'
function handleSelect(selectedKey) {
  history.push("/");
}
//  FormGroup, FormControl, Button

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
            <MenuItem eventKey={2.2} href="/nausturland">Norð Austurland</MenuItem>
            <MenuItem eventKey={2.3} href="/nvesturland">Norð Vesturland</MenuItem>
            <MenuItem eventKey={2.4} href="/sudurland">Suðurland</MenuItem>
            <MenuItem eventKey={2.5} href="/vesturland">Vesturland</MenuItem>
            <MenuItem eventKey={2.6} href="/vestfirdir">Vestfirði</MenuItem>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
);
/*
        <Navbar.Form pullRight>
         <FormGroup>
            <FormControl type="text" placeholder="Leita" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
      </Navbar.Form>
*/
export default NavBar;
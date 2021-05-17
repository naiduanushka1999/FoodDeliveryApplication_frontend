import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import iconimg from '../../Images/iconimg.png'

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navbar className="menu md-2" collapseOnSelect expand="lg md-2" variant="dark">
          <Navbar.Brand ><h2><div className="titleofapp"><img src={iconimg} width="50" height="50" border-radius="50%"></img>&nbsp;&nbsp;Food Delivery Application</div></h2></Navbar.Brand>
          <Nav>
            <Nav.Link href="/"><h4 style={{color:"darkcyan"}}>Home</h4></Nav.Link>
            
          </Nav>
         {/* <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Nav>
                <Nav.Link href="/addUser"><h4 style={{color:"darkcyan"}}>Sign Up</h4></Nav.Link>
    </Nav>*/}
    
             
              
                <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
               <h4> <NavDropdown title="Sign In" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/login" >Admin</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/RestaurantOwnerLogin">Restaurant Owner</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/UserLogin">Customer</NavDropdown.Item>
                </NavDropdown></h4>
              </Nav>
              <Nav className="mr-auto">
               <h4> <NavDropdown title="Sign Up" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/addUser" >Customer</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/RestroOwnerRegisterForm">Restaurant Owner</NavDropdown.Item>
                  
                </NavDropdown></h4>
                </Nav>
             


              <Nav>
                <Nav.Link href="/MyProfile"><h4 style={{color:"darkcyan"}}>My Profile</h4></Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    )
  }
}

export default HeaderComponent;
import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Headers = () => {
    const { user, logout } = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
    
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant='light' className='d-sm-d-sm-flex'>
                <Container>
                    <Navbar.Brand ><Link to='/'>Dragon News Home</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to={'/'}>All News</Link></Nav.Link>
                            {/* dropdown menu kaj korte hobe */}
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Category" id="collasible-nav-dropdown">
                                <NavDropdown.Item href=""><Link to={'/news/:id'}></Link>Category</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='align-items-center d-sm-block'>
                            {
                                user &&
                                user?.uid ?
                                    <>
                                        <Button variant='light' onClick={handleLogOut}>Log out</Button>
                                        <span className='me-3'>{user?.displayName}</span>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

                            {
                                user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle
                                        src={user.photoURL}></Image>
                                    :
                                    <FaUser></FaUser>
                            }

                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Headers;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return(
        <Navbar>
            <Nav>
                <Nav.Link href='#'>
                    <button>My Profile</button>
                </Nav.Link>
                <Nav.Link href='#'>
                    <button>My Road Map</button>
                </Nav.Link>
                <Nav.Link href='#'>
                    <button>Blogs</button>
                </Nav.Link>
                <Nav.Link>
                    <button>My Docs</button>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;
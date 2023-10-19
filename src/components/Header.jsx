import React from 'react'
import { Nav,Navbar,Container,Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  return (
    <>
     <Navbar style={{zIndex:1}}  expand="lg" className="bg-info position-fixed top-0 w-100 mb-5 ">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
            <i className="fa-solid fa-truck-fast me-2"></i>E Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <nav className="ms-auto d-flex flex-row">
            <Nav.Link className="btn border rounded p-2">
              <Link to={'/wishlist'} className='d-flex align-items-center' style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
                <i className="fa-solid fa-heart text-danger me-2"></i>Wishlist
                <Badge className="ms-2 rounded bg-light p-2">{wishlist.length}</Badge>
              </Link>
            </Nav.Link>
            <Nav.Link style={{marginLeft:"15px"}} className="btn border rounded  p-2">
              <Link to='/cart' className='d-flex align-items-center' style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
                <i style={{color: "#11ff00"}} className="fa-solid fa-cart-shopping  me-2"></i>Cart
                <Badge className="ms-2 rounded bg-light p-2">16</Badge>
              </Link>
            </Nav.Link>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/slice/wishlistSlice'




function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()

  return (
    <>
    <div style={{marginTop:'100px'}}>
      <Row className='mt-5'>
      {
        wishlistArray.length>0?
        wishlistArray.map((product,index)=>(<Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded p-2' style={{ width: '18rem',height:"30rem" }}>
        <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>
           <p>{product?.description.slice(0,50)}</p>
           <h6>$ {product?.price}</h6>
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button onClick={()=>dispatch(removeFromWishlist(product.id))}  variant="light"><i class="fa-solid fa-trash" style={{color: "#ff0000"}}></i></Button>
            <Button  variant="light"><i class="fa-solid fa-cart-shopping" style={{color: "#11ff00"}}></i></Button>
          </div>
   
        </Card.Body>
      </Card>
        </Col>)): <div className='d-flex justify-content-center flex-column align-items-center'>
          <img style={{width:"200px",borderRadius:"20px"}} src="https://media.tenor.com/2bhFefS2nLcAAAAC/theres-nothing-here-andre-raines.gif" alt="Nothing Here" />
          <Link to={'/'}>Back to Home</Link>
        </div>
      }
      </Row>
    </div>
    
    </>
  )
}

export default Wishlist
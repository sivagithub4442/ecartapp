import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { addToWishlist } from '../Redux/slice/wishlistSlice'
import { useDispatch } from 'react-redux'


function Home() {
  const data = useFetch("https://dummyjson.com/products")
  //console.log(data);
  const dispatch = useDispatch()

  return (
    <Row className='ms-5' style={{marginTop:'100px'}}>
     { 
     data?.length>0?data?.map((product,index)=>(<Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
     <Card className='shadow rounded p-2' style={{ width: '18rem',height:"30rem" }}>
     <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
     <Card.Body>
       <Card.Title>{product?.title}</Card.Title>
       <Card.Text>
        <p>{product?.description.slice(0,50)}</p>
        <h6>$ {product?.price}</h6>
       </Card.Text>
       <div className='d-flex justify-content-between'>
         <Button onClick={()=>dispatch(addToWishlist(product))} variant="light"><i class="fa-solid fa-heart" style={{color: "#ff0000"}}></i></Button>
         <Button  variant="light"><i class="fa-solid fa-cart-shopping" style={{color: "#11ff00"}}></i></Button>
       </div>

     </Card.Body>
   </Card>
     </Col>)): <p className='text-danger fw-bolder'>Nothing to display</p>
     }

      
    </Row>
  )
}

export default Home
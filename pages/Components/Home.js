

import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice'
import toast from 'react-hot-toast'
import NextLink from 'next/link'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// import Layout from './Layout';
import axios from 'axios'



const Home = () => {

  const dispatch = useDispatch()

  const Send = (e) => {
    dispatch(addToCart(e))
    toast.success('Item added in your Cart')
  }

  const [products, setProducts] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);

  useEffect(() => {
    axios.get('http://localhost:4000/api/retailer/viewproducts')
      .then((response) =>
        setProducts(response.data.response))
      // console.log(response))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // const handleReadMore = () => {
  //   setDisplayCount(products.length);
  // };


const handleOpenRazorpay = (data) => {
  const options = {
    key: 'rzp_test_3mBuXRupVMeYZf',
    amount : Number(data.price),
    currency: data.currency,
    name: 'TpBazaar',
    order_id : data.id,
    handler: function(response){
      console.log(response, "34")
      axios.post('http://localhost:4000/api/verify', {response: response})
      .then(res => {
        console.log(res, "53")
      })
      .catch(err => {
        console.log(err)
      })
    }

  }
  const rzp = new window.Razorpay(options)
  rzp.open()
}

  const handlePayment = (price) => {
    const _data = {price : price}
    axios.post('http://localhost:4000/api/checkout', _data)
    .then(res => {
      console.log(res.data, "69")
      handleOpenRazorpay(res.data.data)
    }
    ).catch(err => {
      console.log(err)
    })
    console.log(price)
  }

  return (
    <div style={{ backgroundColor: 'wheat' }}>
      {/* <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'> */}
      <div className='col-12'>
        <Carousel>
          <Carousel.Item>
            <img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1703147470_Har_Thaali_Mein_Basmati.jpg?im=Resize=(1680,320)' style={{ height: '350px', width: '100%' }}
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>

            <img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1703699381_Unwrap_Unmatched_Discounts_D.jpg?im=Resize=(1680,320)' style={{ height: '350px', width: '100%' }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1703788359_Mega_Savings_On_Mens_Footwear_D.jpg?im=Resize=(1680,320)' style={{ height: '350px', width: '100%' }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* </div>
        </div>
      </section> */}
      {/* <br/><br/> */}

      <div style={{ backgroundColor: 'wheat' }}>
        <div className='mt-5' style={{ marginLeft: '60px', display: 'flex', flexWrap: 'wrap' }}>

          {products.map((product, index) => (

            <div key={index} style={{ marginLeft: index > 0 ? '20px' : '0', marginBottom: '20px' }}>
              <Card style={{ width: '15rem',height: '320px', marginLeft: '50px', marginBottom: "40px", cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }} className='product-card'>
                <NextLink href={"/[ID]"} as={`${product.pid}`}><Card.Img variant="top" style={{ width: "190px", height: "140px", paddingLeft: '20px', marginTop: '15px', alignItems: 'center' }} src={product.photo} /></NextLink>
                <Card.Body>
                  <Card.Title><h6>{product.pname}</h6></Card.Title>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{product.brandname}</span>
                    <span> &#8377; {product.price}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                    {/* <button  onClick={() => CheckoutHandler(product.id, product.price)}>Buy Now</button> */}
                    <Button className='col-lg-5' onClick={() => handlePayment(product.price)}>Buy Now</Button>
                    <Button onClick={() => Send(product)} className='col-lg-5' variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        {/* {products.length > 5 && displayCount < products.length && (
          <Button
            style={{ marginLeft: '640px', marginTop: '30px' }}
            className='btn-sm'
            variant="dark"
            onClick={handleReadMore}
          >
            Read More
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default Home;

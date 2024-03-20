import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/header';
import Footer from './Components/footer';
import { addToCart } from './redux/features/cartSlice'
import toast from 'react-hot-toast'

function SubcatProducts(props) {
    
    const { carts } = useSelector((state) => state.allCart)
    console.log(carts)
    // const subcat = props.subcategoryid
    const dispatch = useDispatch()

    const Send = (e) => {
      dispatch(addToCart(e))
      toast.success('Item added in your Cart')}

    const [products, setProducts] = useState([]);
     const [displayCount, setDisplayCount] = useState(5);

    console.log(props.subcategoryid)    
    useEffect(() => {
        if(props.subcategoryid != null){

            axios.get(`http://localhost:4000/api/getproducybysubid/${props.subcategoryid}`)
                .then(res => {
                    setProducts(res.data.response);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }, [props.subcategoryid]);

    return (
        <>
        <Header/>
            <div style={{ backgroundColor: 'wheat', display: 'flex' }}>
                <div className='mt-5' style={{ marginLeft: '60px', display: 'flex', flexWrap: 'wrap' }}>
                    {products.map((product, index) => (
                        <div key={index} style={{ marginLeft: index > 0 ? '20px' : '0', marginBottom: '20px' }}>
                            <Card style={{ width: '13rem', marginLeft: '50px', marginBottom: "40px", cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }} className='product-card'>
                                <Card.Img variant="top" style={{ width: "190px", height: "140px", paddingLeft: '20px', marginTop: '15px' }} src={product.photo} />
                                <Card.Body>
                                    <Card.Title><h6>{product.pname}</h6></Card.Title>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span>{product.brandname}</span>
                                        <span> &#8377; {product.price}</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
                                        <Button onClick={() => Send(product)} className='col-lg-12' variant="danger">
                                            Add to Cart
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
                {products.length > 5 && displayCount < products.length && (
                    <Button
                        style={{ marginLeft: '640px', marginTop: '30px' }}
                        className='btn-sm'
                        variant="dark"
                        onClick={handleReadMore}
                    >
                        Read More
                    </Button>
                )}
            </div>
            <Footer/>
        </>
    );
}

export default SubcatProducts;

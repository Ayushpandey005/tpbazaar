// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Table } from 'react-bootstrap';
// import { MdDelete } from "react-icons/md";
// import { useSelector } from 'react-redux';

// function Productsalldetails(props) {
//     console.log(props.pid)
//     const [products, setProducts] = useState([]);


//     // const {carts}  = useSelector((state) => state.allCart) 


//     useEffect(()=> {
//         axios.get(`http://localhost:4000/api/viewproduct/${props.pid}`)
//         .then(res => {
//             setProducts(res.data.response)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }, [props.pid])

//     return (
//     <div>
//         <div className='container mt-2'>
//             <h2 className='text-center'>
//                 Product Details
//             </h2>
//             <section className='container mt-3'>
//                 <div className='itemsdetails'>
//                     <div className='items_img' >
//                         <img src={products[0].photo} style={{height: '200px', width: '200px'}}/>
//                     </div>
//                     <div className='details'>
//                     <table>
//                         <tbody>
//                         <tr>
//                             <td>
//                                 <p><strong>Product :</strong>Football</p>
//                                 <p><strong>Brand Name</strong> : Nike</p>
//                                 <p><strong>Price</strong> : 1600</p>
//                                 <p><strong>Total</strong> : 1600</p>
//                             </td>
//                             <td>
//                                 <p><strong>Rating : </strong><span style={{background:'green', color: '#fff', padding: '2px 5px', borderRadius: '5px'}}> 3.5* </span></p>
//                                 <p><strong>Order Review</strong><span> : This product is highly recommended to all, it is the most selling product </span></p>
//                                 {/* <p><strong>Remove</strong><span> : <MdDelete/> </span></p> */}
//                                 <p><strong>Remove</strong> : <MdDelete style={{color: 'red', fontSize: '24px', cursor: 'pointer'}}/></p>

//                             </td>
//                         </tr>
//                         </tbody>
//                     </table>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     </div>
//     )
// }





// export default Productsalldetails

// --------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";

function Productsalldetails(props) {
    const [productsDescription, setProductsDescription] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/viewdescriptionproduct/${props.pid}`)
            .then(res => {
                setProductsDescription(res.data.response);
            })
            .catch(err => {
                console.log(err);
            });
    }, [props.pid]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/viewproduct/${props.pid}`)
            .then(res => {
                setProducts(res.data.response);
            })
            .catch(err => {
                console.log(err);
            });
    }, [props.pid]);

    return (
        <div>
            <div className='container mt-2'>
                <h2 className='text-center'>Product Details</h2>
                <section className='container mt-3' >
                    {products.map((product, index) => (
                        <div className='itemsdetails' key={index}>
                            <div className='items_img'>
                                <img src={product.photo} style={{ height: '200px', width: '200px' }} alt={`Product ${index + 1}`} />
                            </div>
                            <div className='details'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p><strong>Product :</strong>{product.pname}</p>
                                                <p><strong>Brand Name :</strong> {product.brandname}</p>
                                                <p><strong>Price :</strong> {product.price}</p>
                                                <p><strong>Discount :</strong> {product.discount}%</p>
                                            </td>
                                            <td>
                                                <p><strong>Rating :</strong> <span style={{ background: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px' }}>{product.rating}****</span></p>
                                                {/* <p><strong>Order Review :</strong> {product.review} </p> */}
                                                <p><strong>Remove :</strong> <MdDelete style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }} /></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                    {/* </section>
                <section> */}
                    {productsDescription.map((details, index) => (
                        <div className='itemsdetails' key={index}>
                            <div className='details'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {details.description && <p><strong>Description :</strong>{details.description}</p>}
                                                {details.size && <p><strong>Size :</strong> {details.size}</p>}
                                                {details.material && <p><strong>Material :</strong> {details.material}</p>}
                                                {details.weight && <p><strong>Weight :</strong> {details.weight} g</p>}
                                                {details.ram && <p><strong>RAM :</strong> {details.ram}</p>}
                                                {details.screen && <p><strong>Screen :</strong> {details.screen}</p>}
                                                {details.rom && <p><strong>ROM :</strong> {details.rom}</p>}
                                                {details.processor && <p><strong>Processor :</strong> {details.processor}</p>}
                                                {details.mfd && <p><strong>Mfd :</strong> {details.mfd}</p>}
                                                {details.expdate && <p><strong>ExpiryDate :</strong> {details.expdate}</p>}
                                                {details.madeincountry && <p><strong>Made In :</strong> {details.madeincountry}</p>}
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}

                </section>
            </div>
        </div>
    );
}

export default Productsalldetails;





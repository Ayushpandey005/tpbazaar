import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeToCart,decrementItem ,emptycartIteam} from './redux/features/cartSlice'
import toast from 'react-hot-toast';
import axios from 'axios';
import Header from './Components/header';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import NextLink from 'next/link'




function Cartdetails() {
    const {carts}  = useSelector((state) => state.allCart) 

    const [totalprice, setPrice] = useState(0)
    const [totalquantity, setTotalQuantity] = useState(0)

    const dispatch = useDispatch();

    const handleIncrement = (e) => {
        dispatch(addToCart(e))
    }

    //remove single item decrement -
    const handleSingleDecrement = (e) => {
        dispatch(decrementItem(e))
    }

    //remove single data 
    const handleDecrement = (e) => {
        dispatch(removeToCart(e))
    }

    const emptycart = ()=>{
        dispatch(emptycartIteam())
        toast.success("Your Cart is Empty")
}

    //total price
    const total = () => {

        let totalprice = 0
        carts.map((ele, ind)=> {
            totalprice = ele.price * ele.quantity + totalprice 
        });
        setPrice(totalprice)
    }

    //total quantity
    const countquantity = () => {

        let totalquantity = 0
        carts.map((ele, ind)=> {
            totalquantity = ele.quantity + totalquantity
        });
        setTotalQuantity(totalquantity)
    }

    useEffect(() => {
        total()
    }, [total])

    useEffect(() => {
        countquantity()
    }, [countquantity])
    

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
        <>
        <Header/>
            <div className='row justify-content-center m-0'>
                <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                    <div className="card">
                        <div className="card-header bg-dark p-3">
                            <div className='card-header-flex'>
                                <h5 className='text-white m-0'>Cart Calculation{carts.length >0 ? `(${carts.length})`:""}</h5>
                                {
                                    carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm'
                                    onClick={emptycart}
                                    ><i className='fa fa-trash-alt mr-2'></i><span>EmptyCart</span></button>
                                        : ""
                                }
                            </div>

                        </div>
                        <div className="card-body p-0">
                                {
                                    carts.length === 0 ? <table className='table cart-table mb-0'>
                                        <tbody>
                                            <tr>
                                                <td colSpan={6}>
                                                    <div className='cart-empty'>
                                                        <i className='fa fa-shopping-cart'></i>
                                                        <p>Your Cart Is Empty</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> :
                                    <table className='table cart-table mb-0 table-responsive-sm'>
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th className='text-right'> <span id="amount" className='amount'>Total Amount</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carts.map((data,index)=>{
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <button className='singledelete' style={{backgroundColor:'pink', width: '40px', border: '1px solid red', borderRadius: '30px'}}
                                                                    onClick={()=>handleDecrement(data.pid)}
                                                                    ><FaTrash style={{color: 'red', height: '30px'}} /></button>
                                                                </td>
                                                                <td>
                                                                    <NextLink href={"/[ID]"} as={`${data.pid}`}><div className='photo'><img src={data.photo} alt="" style={{height:'50px', width:'50px'}} />
                                                                    </div></NextLink>
                                                                    </td>
                                                                <td><div className='pname'><p>{data.pname}</p></div></td>
                                                                <td>{data.price}</td>
                                                                <td>
                                                                    <div className="prdct-qty-container">
                                                                        <button className='prdct-qty-btn' type='button' 
                                                                        // onClick={data.qnty <=1 ?()=>handleDecrement(data.id) :()=>handleSingleDecrement(data)}
                                                                        onClick={data.quantity <= 1 ?() => handleDecrement(data.pid) :() => handleSingleDecrement(data)}
                                                                        >
                                                                           
                                                                            <FiMinus/>
                                                                        </button>
                                                                        <input type="text" className='qty-input-box' value={data.quantity} disabled name="" id="" />
                                                                        <button className='prdct-qty-btn' type='button' onClick={()=>handleIncrement(data)}>
                                                                        <FiPlus/>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className='text-right'>₹ {data.quantity * data.price}</td>
                                                                {/* <td>
                                                                <button style={{backgroundColor:'green', border: '1px solid black', borderRadius: '10px'}} onClick={()=> handlePayment(data.price * data.quantity)}>BUY NOW</button>
                                                                </td> */}
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th colSpan={1}>&nbsp;</th>
                                                <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalquantity}</span></th>
                                                <button style={{backgroundColor:'green', border: '1px solid black', borderRadius: '10px'}} onClick={()=> handlePayment(totalprice)}>BUY NOW</button>
                                                <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹ {totalprice}</span></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Cartdetails;







// import React from 'react'
// // import { Table } from 'react-bootstrap';
// import { MdDelete } from "react-icons/md";
// import { useSelector } from 'react-redux';


// function productdetails() {
//     const {carts}  = useSelector((state) => state.allCart) 
   
//   return (
//     <div>
//         <div className='container mt-2'>
//             <h2 className='text-center'>
//                 Product Details
//             </h2>
//             <section className='container mt-3'>
//                 <div className='itemsdetails'>
//                     <div className='items_img' >
//                         <img src='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71G8tOhWQiL._AC_UL480_FMwebp_QL65_.jpg' style={{height: '200px', width: '200px'}}/>
//                     </div>
//                     <div className='details'>
//                     <table>
//                         <tbody>
//                         <tr>
//                             <td>
//                                 <p><strong>Product</strong> : Football</p>
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
//   )
// }

// export default productdetailsw
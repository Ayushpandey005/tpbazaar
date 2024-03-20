// // components/Header.js

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import Badge from '@mui/material/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoMdClose } from "react-icons/io";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
// import { useRouter } from 'next/router'
import NextLink from 'next/link'
import axios from 'axios';





const Header = () => {
    // subcategoryid = props.subcategoryid
    // const router = useRouter();
    // router.push('/productdetails')

    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0()
    console.log("Current user", user,isAuthenticated)

    const [viewSubcategory, setViewSub] = useState([])
    const [viewSubcategoryk1, setViewSubk1] = useState([])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    const { carts } = useSelector((state) => state.allCart)
    console.log(carts)


    useEffect((pcategoryid) => {
        axios.get(`http://localhost:4000/api/subcategoryidretailer/viewproducts/${pcategoryid}`)

            .then(res => {
                setViewSub(res.data.response)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect((pcategoryid) => {
        axios.get(`http://localhost:4000/api/viewproductsk1/${pcategoryid}`)

            .then(res => {
                setViewSubk1(res.data.response)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <>
            <header className='header-top-strip py-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Free shipping over $100 & free returns</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href='tel:+91 7694879459'>+91 7694879459</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-upper py-2 mb-0'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <NextLink href='/'>
                                <h2 className='text-white'>
                                    TpBazaar
                                </h2>
                            </NextLink>
                        </div>
                        <div className='col-5'>
                            <div class="input-group">
                                <input type="text" className="form-control"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2">
                                </input>
                                <span className="input-group-text " id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-item-center justify-content-between'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Link href='/wishlist' style={{ textDecoration: 'none' }} >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaRegHeart className='header-icons' />
                                            <p className='text-white mb-0' style={{ marginLeft: '5px', marginTop: '30p', textTransform: 'uppercase' }}>Favorite <br /> Wishlist </p>
                                        </div>
                                    </Link>
                                </div>
                                {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                                    
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaRegUser className='header-icons' />
                                            <button className='text-white mb-0' 
                                            style={{ marginLeft: '5px', marginTop: '30p', textTransform: 'uppercase', backgroundColor:'transparent', border:'none' }} onClick={()=> loginWithRedirect()}>
                                                Login/Signup </button>
                                        </div>
                                    
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaRegUser className='header-icons' />
                                            <h3 className='mb-0 text-white'>User is { isAuthenticated ? 'logged in' : 'not logged in'}</h3>
                                        </div>
                                    
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {isAuthenticated && (
                                            <pre>
                                                {JSON.stringify(user, null, 2)}        
                                            </pre>
                                        )}
                                        </div>
                                </div> */}

                                 <div>
                                    {isAuthenticated ? (
                                        <div>
                                            {/* <p>{user.name}</p> */}
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaRegUser className='header-icons' />
                                                <button onClick={()=> logout({returnTo: window.location.origin})}>Log Out</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaRegUser className='header-icons' />
                                            <button onClick={()=> loginWithRedirect()}>Log In</button>
                                        </div>
                                    )}
                                </div> 
                                {/* </Link> */}
                                {/* </div> */}
                                {/* </div> */}
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <NextLink href='/cartdetails' style={{ textDecoration: 'none' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                                                <Badge badgeContent={carts.length} color="primary"
                                                    id="basic-button"
                                                    aria-controls={open ? 'basic-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    onClick={handleClick}

                                                >
                                                    <FaShoppingCart className='header-icons' />
                                                </Badge>
                                                <p className='text-white mb-0' style={{ marginLeft: '5px', textTransform: 'uppercase' }}> Items <br /> In Cart </p>
                                                <Menu
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                        'aria-labelledby': 'basic-button',
                                                    }}
                                                >

                                                    {
                                                        carts.length ?
                                                            <div className='cards-details' style={{ width: '24rem', padding: 10 }}>
                                                                <table className='table'>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Photo</th>
                                                                            <th>Product Name</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {
                                                                            carts.map((e) => {
                                                                                return (
                                                                                    <>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <Link href='/Productdetails'><img src={e.photo} alt='' style={{ width: '5rem', height: '5rem' }} /></Link>
                                                                                            </td>
                                                                                            <td>
                                                                                                <p>Product : {e.pname}</p>
                                                                                                <p>Brand : {e.brandname}</p>
                                                                                                <p>Price : ₹{e.price}</p>
                                                                                                <p>Quantity : {e.quantity}</p>
                                                                                            </td>
                                                                                            <td className='mt-5'>
                                                                                                <MdDelete style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </>
                                                                                )
                                                                            })
                                                                        }
                                                                        <p className='text-center'>Total : ₹2000 </p>
                                                                    </tbody>
                                                                </table>
                                                            </div> :
                                                            <div className='card-details d-flex align-items-center justify-content-center' style={{ width: '24rem', padding: 10, position: 'relative' }}>
                                                                <IoMdClose style={{ position: 'absolute', top: 2, right: 20, fontSize: 23, cursor: 'pointer' }} onClick={handleClose} />
                                                                <p style={{ fontSize: 22 }}>Cart Is Empty</p>
                                                            </div>

                                                    }
                                                </Menu>
                                            </div>
                                        </NextLink>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-bottom py-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    {/* <div className="dropdown">

                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 align-items-center gap-15" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                          <CgMenuGridO className='dropdownmenuicon'/>  Shop Categories
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div> */}

                                    <Dropdown data-bs-theme="dark" className='dropdown'>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='btn btn-secondary dropdown-toggle bg-transparent border-0 align-items-center gap-15'>
                                            <CgMenuGridO className='dropdownmenuicon' />
                                              Shop Categories
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                                Action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div>
                                    <Dropdown data-bs-theme="dark" className='dropdown'>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='btn btn-secondary dropdown-toggle bg-transparent border-0 align-items-center gap-15'>
                                            {/* <CgMenuGridO className='dropdownmenuicon' /> */}
                                              Electronics
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {viewSubcategory &&
                                                viewSubcategory.map((item) => (
                                                    <Dropdown.Item >
                                                        <NextLink href={"/[ID]"} as={`${item.subcategoryid}`}>{item.subcategoryname}</NextLink>
                                                        {/* {item.subcategoryname} */}
                                                    </Dropdown.Item>
                                                ))}
                                        </Dropdown.Menu>

                                    </Dropdown>
                                </div>
                                <div>
                                    <Dropdown data-bs-theme="dark" className='dropdown'>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='btn btn-secondary dropdown-toggle bg-transparent border-0 align-items-center gap-15'>
                                            {/* <CgMenuGridO className='dropdownmenuicon' />  */}
                                             Kitchen
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {viewSubcategoryk1 &&
                                                viewSubcategoryk1.map((item) => (
                                                    <Dropdown.Item >
                                                        <NextLink href={"/[ID]"} as={`${item.subcategoryid}`}>{item.subcategoryname}</NextLink>
                                                        {/* {item.subcategoryname} */}
                                                    </Dropdown.Item>
                                                ))}
                                        </Dropdown.Menu>

                                    </Dropdown>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>



                                        <Link href='/ourstore' style={{ textDecoration: 'none' }}>
                                            <span className='link-style'> Store </span>
                                        </Link>
                                        <Link href='/bestsells' style={{ textDecoration: 'none' }}>
                                            <span className='link-style'> Best Sellers </span>
                                        </Link>
                                        <Link href='/contact' style={{ textDecoration: 'none' }}>
                                            <span className='link-style'> Contact </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};


export default Header;


// components/Footer.js

import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    // <footer style={{ background: 'lightgreen', padding: '10px' }}>
    //   {/* Your footer content */}
    //   Footer Content Here
    // </footer>
    <>
      {/* <footer className='py-3'></footer> */}

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>Hno: 72-A Swadesh Nagar, Ashoka Garden <br />
                  Bhopal, Madhya Pradesh <br />
                  PinCode: 462023
                </address>
                <a href='tel: +91 7684978459' className='mt-4 d-block mb-0 text-white' style={{ textDecoration: 'none' }}>
                  +91 7694879459
                </a>
                <a href='mailto:ayushpachpandey09@gmail.com' className='mt-4 d-block mb-3 text-white' style={{ textDecoration: 'none' }}>
                  ayushpachpandey09@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30'>
                  <a className='text-white'> <FaFacebookSquare className='fs-4'/></a>
                  <a className='text-white'> <GrInstagram className='fs-4'/>
                  </a>
                  <a className='text-white'><FaYoutube className='fs-4'/>
                  </a>
                  <a className='text-white'><FaLinkedin className='fs-4'/></a>

                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Privacy Policy</Link>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Refund Policy</Link>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Shipping Policy</Link>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Terms & Condition</Link>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>About Us</Link>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>FAQ</Link>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Contact</Link>
                {/* <Link  href='' className='text-white py-2 mb-1'>Watch</Link> */}
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Laptops</Link>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Headphones</Link>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Tablets</Link>
                <Link href='' className='text-white py-2 mb-1' style={{ textDecoration: 'none' }}>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}: Powered by TpBazaar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

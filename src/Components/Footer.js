import React from 'react'

function Footer() {
    return (
        <footer className='d-md-flex mt-4 p-b2'>
            <ul className='navbar-nav flex-row'>
                <li  className="nav-item mx-4  d-inline-flex">
                    <a href='https://instagram.com/' target='_blank' className="nav-link text-white">
                        <i className="bi bi-instagram"></i>
                        <span> Instagram</span>
                    </a>
                </li>
                <li className="nav-item mx-4 d-inline-flex">
                    <a href='https://www.facebook.com/'  target='_blank' className="nav-link text-white">
                        <i className="bi bi-facebook"></i>
                        <span> Facebook</span>
                    </a>
                </li>
                <li  className="nav-item mx-4  d-inline-flex">
                    <a className="nav-link text-white"  target='_blank' href='mailto:info@joudkh.com'>
                    <i className="bi bi-envelope-open"></i>
                        <span> info@joudkh.com</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer

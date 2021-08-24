import React from 'react'

function Footer() {
    return (
        <footer className='d-flex mt-4 p-b2'>
            <ul className='navbar-nav flex-row'>
                <li  className="nav-item mx-5 text-white  fs-5">
                    <a href='https://instagram.com/' target='_blank' className="nav-link text-white">
                        <i className="bi bi-instagram"></i>
                        <span> Instagram</span>
                    </a>
                </li>
                <li className="nav-item mx-4 text-white">
                    <a href='https://www.facebook.com/'  target='_blank' className=" fs-5 nav-link text-white">
                        <i className="bi bi-facebook"></i>
                        <span> Facebook</span>
                    </a>
                </li>
                <li  className="nav-item mx-4">
                    <a className="nav-link text-white fs-5"  target='_blank' href='mailto:info@joudkh.com'>
                    <i className="bi bi-envelope-open"></i>
                        <span> info@joudkh.com</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer

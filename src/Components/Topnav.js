

import React from 'react'
import logoNav from '../img/logoNav.png'
import {Link} from 'react-router-dom'
//<Link to="/">Home</Link>

let navs = [
  {
    name: 'الرئيسية',
    link: '/',
  },
  {
    name: 'مناهجنا',
    link: '/courses',
  },
  {
    name: 'طلابنا',
    link: '/students',
  },
  {
    name: 'أهدافنا',
    link: '/About',
  },
  {
    name: 'المميزات',
    link: '/features',
  },
  {
    name: 'الاسئلة الشائعة',
    link: '/faq',
  },
  {
    name: 'تواصل معنا',
    link: '/Contact',
  },
]
function Topnav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand" >
                    <img src={logoNav} style={{width: '225px'}} alt="صورة تعريفية" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto rtl">
                    {navs.map((title, idx) => (
                        <li className="nav-item cursor-pointer fw-bold mx-2" key={idx}>
                            <Link className="nav-link cursor-pointer text-white" to={title.link}>{title.name}</Link>
                        </li>))}

                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topnav

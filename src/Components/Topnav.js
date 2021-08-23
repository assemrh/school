/**
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 */

import React from 'react'



let navs = [
  {
    name: 'الرئيسية',
    link: '/',
  },
  {
    name: 'مناهجنا',
    link: '/',
  },
  {
    name: 'طلابنا',
    link: '/',
  },
  {
    name: 'أهدافنا',
    link: '/About',
  },
  {
    name: 'المميزات',
    link: '/',
  },
  {
    name: 'الاسئلة الشائعة',
    link: '/',
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
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {navs.map((title, idx) => (
                        <li className="nav-item cursor-pointer fw-bold mx-2" key={idx}>
                            <a className="nav-link cursor-pointer text-white" href={title.link}>{title.name}</a>
                        </li>))}

                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topnav

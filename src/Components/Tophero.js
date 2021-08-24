import React from 'react'

 function Tophero(props) {
    return (
        <div className='top-hero w-100 d-lg-none d-block mb-5 p-3 shadow bg-gold rounded '>
          <img className='rounded ' src={props.src}/>
        </div>
    )
}

 function Hero(props) {
    return (
        <div className='img-hero d-none d-lg-block'>
          <img src={props.src}/>
        </div>
    )
}

export {
  Hero,
  Tophero,
}

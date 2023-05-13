import React from 'react'
import { Container } from 'react-bootstrap-v5'
import logo from "../assets/img/png/solana_logo.png";

const Preloader = () => {
  return (
    <>
      <section
        id="none"
        className=" min-vh-100 w-100 bg-black d-flex justify-content-center z_100 position-fixed top-0 start-0 align-items-center"
      >
        <div className=' max_w_600' data-aos="flip-left" data-aos-duration="3000">
          <img className='w-100 px-5' src={logo} alt="img" />
        </div>
      </section>
    </>
  );
}

export default Preloader
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import heroImg from "../assets/img/png/webp/hero-img.webp";

const Developer = () => {
  return (
    <>
      <section className=" bg-black ">
        <Container>
          <Row className="align-items-center flex-wrap-reverse">
            <Col lg={5} md={6} className="pb-5">
              <h1 className=" fs_94 ff_helvetica clr_white lh_96 pb-3 mb-0">
                Developer Resources
              </h1>
              <p className=" ff_helvetica fs_21 clr_grayC4 pe-xl-5 pt-1 pb-4 mb-0">
                A manual for joining the Solana ecosystem. By builders for
                builders.
              </p>
              <div className="pt-3 d-flex gap-2">
                <button className="build_button bg_lightGreen fs_15 ff_roboto rounded-pill">
                  Build Now
                </button>
                <button className="stackExchange_button rounded-pill fs_15 ff_roboto clr_white">
                  Stack Exchange{" "}
                  <span className="ps-2">
                    <svg
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.882812 12.3185H15.6221V13.1043C15.6221 14.4507 14.5757 15.5328 13.29 15.5328H12.6114L9.51138 18.7364V15.5328H3.21496C1.92924 15.5328 0.882812 14.4507 0.882812 13.1043V12.3185ZM0.882812 11.4757H15.6221V8.43997H0.882812V11.4757ZM0.882812 7.56854H15.6221V4.53283H0.882812V7.56854ZM13.2864 0.450684H3.21496C1.92924 0.450684 0.882812 1.53283 0.882812 2.86854V3.66497H15.6221V2.86854C15.6185 1.53283 14.5721 0.450684 13.2864 0.450684Z"
                        fill="#848895"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </Col>
            <Col>
              <div className="max_width_636 position-relative heroImg_position">
                <img
                  className="w-100 position-relative z_1"
                  src={heroImg}
                  alt="img"
                />
                <div className=" position-absolute heroBackground_light w-100 height_642 end-0 top-0 z_0"></div>
              </div>
            </Col>
          </Row>
         
        </Container>
      </section>
    </>
  );
}

export default Developer
import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import { TbCircleArrowRight } from "react-icons/tb";
import changeLogo from "../assets/img/png/webp/changeLogo.webp";

const Sources = () => {
  return (
    <>
      <section className="bg_linearGradient_black py-sm-5 pb-5">
        <Container className="pt-4">
          <h5 className=" ff_helvetica fs_36 clr_white mb-1 pt-1">
            Get started.
          </h5>
          <p className=" ff_helvetica clr_grayC4 fs_20 mb-0 pb-5">
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
          <Row className="gap-3 pb-5">
            <Col md={6} data-aos="flip-up" data-aos-delay="300">
              <div className="d-flex justify-content-between align-items-center border_bottom">
                <h3 className=" ff_helvetica fs_32 clr_white mb-0 ">
                  Solana Docs
                </h3>
                <button className=" rounded-pill button_animation_upward clr_white bg-transparent pad_12_21_14_21 border_1p_white text_upper_case">
                  View all{" "}
                  <span className="ps-3">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.08008 17L17.0801 7"
                        stroke="#848895"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.08008 7H17.0801V17"
                        stroke="#848895"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <p className=" ff_helvetica fs_20 clr_white pt-4 mt-1">
                Learn how Solana works and get a high-{" "}
                <span className="d-lg-block">
                  level understanding of Solana's architecture.
                </span>
              </p>
            </Col>
            <Col data-aos="flip-up" data-aos-delay="600">
              <div className="d-flex justify-content-between align-items-center border_bottom">
                <h3 className=" ff_helvetica fs_32 clr_white mb-0 ">
                  Metaplex Docs
                </h3>
                <button className=" rounded-pill button_animation_upward clr_white bg-transparent pad_12_21_14_21 border_1p_white text_upper_case">
                  View all{" "}
                  <span className="ps-3">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.08008 17L17.0801 7"
                        stroke="#848895"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.08008 7H17.0801V17"
                        stroke="#848895"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <p className=" ff_helvetica fs_20 clr_white pe-4 pt-4 mt-1 ">
                Learn what you build with Metaplex, make the process of creating
                and launching NFTs easier.
              </p>
            </Col>
          </Row>
          <Row className="pt-sm-5 mt-3  align-items-center align-items-lg-end flex-wrap-reverse">
            <Col lg={6} xs={12} className="pt-4" data-aos="flip-up" data-aos-delay="900">
              <h3 className=" ff_helvetica fs_39 clr_white pb-4 mb-0">
                Solana Changelog
              </h3>
              <p className=" ff_helvetica fs_20 clr_white lh_27 pt-1 pb-5 mb-2 pe-xl-5">
                Some more Solana changes from Jacob & Joe. Subscribe to the
                newsletter: https://solana.us17.list-manage.com/s... Proposal -
                Priced Compute Units: ...
              </p>
              <button className=" ff_roboto button_animation_upward fs_15 clr_white bg-black rounded-pill episode_button text_upper_case">
                Latest episode{" "}
                <span className="ps_12">
                  <TbCircleArrowRight />
                </span>
              </button>
            </Col>
            <Col lg={6} xs={12} className="pt-4" data-aos="flip-up" data-aos-delay="1200">
              <img className="w-100" src={changeLogo} alt="img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Sources;

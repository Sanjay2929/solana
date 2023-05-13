import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";

const Library = () => {
  const toolAndlibrary = [
    {
      id: 11,
      heading: "Core Documentation",
      data: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
      delay: 200 ,
    },
    {
      id: 12,
      heading: "Solana Cookbook",
      data: "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
      delay: 400 ,
    },
    {
      id: 13,
      heading: "Solana Stack Exchange",
      data: "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
      delay: 600 ,
    },
    {
      id: 14,
      heading: "Solana Playground",
      data: "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
      delay: 800 ,
    },
    {
      id: 15,
      heading: "create-solana-dapp",
      data: "Get up and running fast with Solana dApps, generate a project template in seconds.",
      delay: 1000 ,
    },
    {
      id: 16,
      heading: "Anchor Docs",
      data: "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
      delay: 1200 ,
    },
    {
      id: 17,
      heading: "Solana Program Library",
      data: "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
      delay: 1400 ,
    },
    {
      id: 18,
      heading: "Program Examples",
      data: "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
      delay: 1600 ,
    },
  ];
  return (
    <>
      <section className="bg-black py-sm-5 pb-5">
        <Container className="pb-4">
          <h3 className=" ff_helvetica fs_37 clr_white mb-1">Dig deeper.</h3>
          <p className=" ff_helvetica clr_grayC4 fs_20 mb-0 pb-3">
            Learn from resources across the greater Solana ecosystem.
          </p>
          <Row className="pt-3">
            {toolAndlibrary.map((val) => {
              return (
                <Col
                  lg={4}
                  sm={6}
                  xs={12}
                  key={val.id}
                  className="pb-4"
                  data-aos="fade-right"
                  data-aos-delay={`${val.delay}`}
                >
                  <div className="library_box h-100 d-flex flex-column justify-content-between align-items-start position-relative overflow-hidden">
                    <div>
                      <h4 className="tool clr_purple fs_12 ff_helvetica pb-2 mb-0">
                        tool / library
                      </h4>
                      <h5 className=" ff_helvetica fs_19 clr_white mb-0 pb_14 ">
                        {val.heading}
                      </h5>
                      <p className=" ff_helvetica fs_16 lh_26 clr_white mb-0 pb_22">
                        {val.data}
                      </p>
                    </div>
                    <button className=" bg-transparent up_arrow_Hover border-0 ff_helvetica fs_11 clr_white text_upper_case">
                      Learn more{" "}
                      <span>
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
                    <div className="purple_light position-absolute bottom-0"></div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Library;

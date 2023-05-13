import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import buildspace from "../assets/img/png/webp/buildspace_bg.webp";
import Bytes from "../assets/img/png/webp/Solana_Bytes.webp";
import knox from "../assets/img/png/webp/developmentBYknox.webp";
import codecamp from "../assets/img/png/webp/freecodecamp.webp";
import series from "../assets/img/png/webp/scaffold_series.webp";
import Bootcamp from "../assets/img/png/webp/solanaBootcamp.webp";


const Courses = () => {
  const mycourse = [
    {
      id: 1,
      chapter: "14 Chapters",
      bgimg: buildspace,
      course: "Buildspace",
      delay: 200 ,
    },
    {
      id: 2,
      chapter: "12 Chapters",
      bgimg: Bytes,
      course: "Solana Bytes",
      delay: 400 ,
    },
    {
      id: 3,
      chapter: "1 Chapters",
      bgimg: series,
      course: "Scaffold Series",
      delay: 600 ,
    },
    {
      id: 4,
      chapter: "3 Chapters",
      bgimg: codecamp,
      course: "Freecodecamp Solana Course",
      delay: 800 ,
    },
    {
      id: 5,
      chapter: "167 Chapters",
      bgimg: knox,
      course: "Solana Development by Knox",
      delay: 1000 ,
    },
    {
      id: 6,
      chapter: "8 Chapters",
      course: "Solana Bootcamp",
      bgimg: Bootcamp,
      delay: 1200 ,
    },
  ];
  return (
    <>
      <section className="bg-black pb-5 margin_neg_60">
        <Container>
          <h5 className=" ff_helvetica fs_38 clr_white mb-1">Get started.</h5>
          <p className=" ff_helvetica clr_grayC4 fs_20 mb-0 pb-3">
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
          <div
            className="course1 d-flex align-items-start justify-content-center flex-column ps_88 mt-3 py-5 cursior_pointer"
            data-aos="fade-right"
          >
            <p className="clr_white ff_helvetica mb-0 chapter rounded-pill fs_11 cursior_pointer">
              17 Chapters
            </p>
            <h3 className="clr_white ff_helvetica mb-0 fs_39 pt-3">
              Solana Development Course
            </h3>
            <p className="clr_white ff_helvetica mb-0 fs_18 pb-4 pt-4 mt-1">
              Quickstart your Solana development starting{" "}
              <span className="d-lg-block">
                from nothing to complex programs.
              </span>
            </p>
            <span className=" cursior_pointer circle_arrow">
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0801 27.5C21.9836 27.5 27.5801 21.9036 27.5801 15C27.5801 8.09644 21.9836 2.5 15.0801 2.5C8.17652 2.5 2.58008 8.09644 2.58008 15C2.58008 21.9036 8.17652 27.5 15.0801 27.5Z"
                  stroke="#848895"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0801 20L20.0801 15L15.0801 10"
                  stroke="#848895"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0801 15H20.0801"
                  stroke="#848895"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <Row className="pt-4">
            {mycourse.map((val) => {
              return (
                <Col
                  md={4}
                  sm={6}
                  xs={12}
                  key={val.id}
                  className="pb-4"
                  data-aos="flip-left"
                  data-aos-delay={`${val.delay}`}
                >
                  <div
                    style={{ backgroundImage: `url(${val.bgimg})` }}
                    className=" d-flex align-items-end height_320 courses_background cursior_pointer"
                  >
                    <div className="d-flex justify-content-between w-100 align-items-center">
                      <div className="d-flex flex-column align-items-start">
                        <p className="clr_white ff_helvetica mb-0 chapter rounded-pill fs_11 mb-2 cursior_pointer">
                          {val.chapter}
                        </p>
                        <h4 className="fs_18 ff_helvetica clr_white pt-1">
                          {val.course}
                        </h4>
                      </div>
                      <span className="cursior_pointer svg_color_change">
                        <svg
                          width="31"
                          height="30"
                          viewBox="0 0 31 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0801 27.5C21.9836 27.5 27.5801 21.9036 27.5801 15C27.5801 8.09644 21.9836 2.5 15.0801 2.5C8.17652 2.5 2.58008 8.09644 2.58008 15C2.58008 21.9036 8.17652 27.5 15.0801 27.5Z"
                            stroke="#848895"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.0801 20L20.0801 15L15.0801 10"
                            stroke="#848895"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.0801 15H20.0801"
                            stroke="#848895"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
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

export default Courses;

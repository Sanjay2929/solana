import React, { useState } from "react";
import { Container, Nav, NavLink } from "react-bootstrap-v5";
import pageLogo from "../assets/img/png/webp/solana_logo.webp";
import { TbMenu2 } from "react-icons/tb";
import { GiCrossedBones } from "react-icons/gi";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Navbar = () => {
    const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg_navBlue ">
        <h3 className="text-center ff_roboto fs_17 padY_5_4 lineHeight_27 mb-0">
          Breakpoint 2023 - New City. New Vibes - Get Early Access - &gt;
        </h3>
      </div>
      <nav className="bg-black position-relative z_10">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="max_w_181 paddingY_22_18">
              <a href="#">
                {" "}
                <img
                  className="w-100 position-relative z_51"
                  src={pageLogo}
                  alt="logo"
                />
              </a>
            </div>
            <ul className="ps-0 mb-0 d-md-flex d-none gap_35 ">
              <li className="dropdown">
                <button className="dropbtn">
                  Learn{" "}
                  <span>
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </span>
                </button>
                <div className="dropdown-content">
                  <a href="#">Growth</a>
                  <a href="#">Advertisement</a>
                  <a href="#">Anything</a>
                </div>
              </li>
              <li className="dropdown">
                <button className="dropbtn">
                  Build{" "}
                  <span>
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </span>
                </button>
                <div className="dropdown-content">
                  <a href="#">Grants</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
              <li className="dropdown">
                <button className="dropbtn">
                  Network{" "}
                  <span>
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </span>
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
              <li className="dropdown">
                <button className="dropbtn">
                  Community{" "}
                  <span>
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </span>
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
            </ul>
            <div onClick={showUl} className="d-md-none d-block z_51">
              <h1 className="text-white">
                {first ? <TbMenu2 /> : <GiCrossedBones />}
              </h1>
            </div>

            <Accordion
              className={
                first
                  ? " position-fixed top-0 d-flex d-md-none justify-content-center align-items-center bg_pink w-100 min-vh-100 nav_negative_100 flex-column gap_35"
                  : " position-fixed top-0 d-flex d-md-none justify-content-center align-items-center bg_pink w-100 min-vh-100 start-0 flex-column gap_35 nav_transition z_50"
              }
            >
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="text-center text-white pb-2">
                    Learn
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="d-flex flex-column align-items-center accodian_links">
                    <a href="#">Growth</a>
                    <a href="#">Advertisement</a>
                    <a href="#">Anything</a>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="text-center text-white pb-2">
                    Build
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="d-flex flex-column align-items-center accodian_links">
                    <a href="#">Growth</a>
                    <a href="#">Advertisement</a>
                    <a href="#">Anything</a>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="text-center text-white pb-2">
                    Network
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="d-flex flex-column align-items-center accodian_links">
                    <a href="#">Growth</a>
                    <a href="#">Advertisement</a>
                    <a href="#">Anything</a>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="text-center text-white pb-2">
                    Community
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="d-flex flex-column align-items-center accodian_links">
                    <a href="#">Growth</a>
                    <a href="#">Advertisement</a>
                    <a href="#">Anything</a>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import "../Navbar/Navbar.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar_Container ">
        <div class="container">
          <a class="navbar-brand w-25" href="#">
            <div className="SocialMedia_icons">
              <FaFacebookF className="text-white facebook" />
              <FaInstagram className="text-white instagram" />
              <FaTwitter className="text-white twitter" />
              <FaLinkedinIn className="text-white linkedin" />
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent2">
            <ul class="navbar-nav mx-auto text-center">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">
                  <BsFillTelephoneFill /> +245124586414
                </a>
              </li>
            </ul>
            <div class="d-flex ">
              <p class="mx-auto text-white" type="submit">
                My Account
              </p>
            </div>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div class="container">
          <a class="navbar-brand w-25" href="#">
            <img
              src={require("../../assets/images/logo.png")}
              className="img-fluid w-50"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto text-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  Products
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-dark">Categories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark">Catalogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark">About Us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-dark">Contact Us</a>
              </li>
            </ul>
            <div class="d-flex ">
              <button class="btn btn-outline-success mx-auto" type="submit">
                Enquiry
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

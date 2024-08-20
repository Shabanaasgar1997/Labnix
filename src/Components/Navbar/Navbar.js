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
      <div className="navbar_Container ">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <div className="SocialMedia_icons">
              <FaFacebookF className="text-white facebook" />
              <FaInstagram className="text-white instagram" />
              <FaTwitter className="text-white twitter" />
              <FaLinkedinIn className="text-white linkedin" />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex " id="navbarText">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    <BsFillTelephoneFill /> +245124586414
                  </a>
                </li>
              </ul>
              <span class="navbar-text text-white">My Account</span>
            </div>
          </div>
        </nav>
      </div>

      <nav class="navbar navbar-expand-lg shadow">
        <div className="container">
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
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mx-auto">
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
            <div class="d-flex" role="search">
              <button class="btn" type="submit">
                Enquiry <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

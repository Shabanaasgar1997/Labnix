import React from "react";

import "../Suggested Products/Suggestedproducts.css";
import { MDBCardLink } from "mdb-react-ui-kit";

function Suggestedproducts() {
  return (
    <>
      <div className="container mt-3 ">
        <h1 className="text-center">Suggested Products</h1>

        <div className="row mt-lg-5">
          <div className="col-lg-6">
            <div class="card text-center">
              <div class="row g-0 d-flex align-items-center">
                <div class="col-md-4">
                  <img
                    src={require("../../assets/images/p1.png")}
                    class="img-fluid"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Haze Measurment Devices</h5>
                    <h6 className="card-text">Color & Haze Meter NHM-101</h6>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <button className=" btn-lg w-75 btn_view">View</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 ">
            <div class="card">
              <img
                src={require("../../assets/images/p6.png")}
                class="card-img-top img-fluid p-lg-2 "
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title text-center">Melt Flow Indexer</h6>

                <div className="d-flex">
                  <button href="#" class="card-link border-0 view_btn">
                    View
                  </button>
                  <button href="#" class="card-link border-0 view_btn ">
                    Catalog
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2  ">
            <div class="card">
              <img
                src={require("../../assets/images/p2.png")}
                class="card-img-top img-fluid  p-lg-2"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title text-center">Melt Flow Indexer</h6>

                <div className="d-flex mx-auto text-center">
                  <button href="#" class="card-link border-0 view_btn">
                    View
                  </button>
                  <button href="#" class="card-link border-0 view_btn ">
                    Catalog
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2  ">
            <div class="card ">
              <img
                src={require("../../assets/images/p3.png")}
                class="card-img-top img-fluid p-lg-2"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title text-center">Melt Flow Indexer</h6>

                <div className="d-flex">
                  <button href="#" class="card-link border-0 view_btn ">
                    View
                  </button>
                  <button href="#" class="card-link border-0 view_btn ">
                    Catalog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Suggestedproducts;

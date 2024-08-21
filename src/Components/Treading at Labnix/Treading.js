import React from "react";

import Equipment from "../../Equipment";

import "../Treading at Labnix/Treading.css";

function Trading() {
  return (
    <>
      <>
        <div className="container mt-3">
          <h2 className="text-center">Treading At Labnix</h2>
        </div>

        <div className="container">
          <div className="row">
            {Equipment.map((item) => {
              return (
                <>
                  <div className="col-lg-4">
                    <div class="card mb-3 p-1 mx-auto text-center">
                      <div class="row g-0 d-flex align-items-center">
                        <div class="col-md-4">
                          <img
                            src={item.image}
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>

                            <p class="card-text">
                              <small class="text-body-secondary">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Unde, labore.
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="buttons mx-auto">
                        <button className=" border  ">View</button>
                        <button className="border ">Quote</button>
                        <button className=" border ">Catalog</button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
}

export default Trading;

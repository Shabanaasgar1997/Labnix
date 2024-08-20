import React from "react";

import Equipment from "../../Equipment";

function Feature() {
  return (
    <>
      <div className="container mt-lg-5">
        <h2 className="text-center">FEATURED CATEGORIES</h2>

        <div className="row">
          {Equipment.map((item) => {
            return (
              <>
                <div className="col-lg-3">
                  <div class="card p-lg-3 mb-lg-2 bg-light">
                    <img
                      src={item.image}
                      class="card-img-top img-fluid w-100 mx-auto"
                      alt="..."
                    />
                    <div class="card-body">
                      <h6 class="card-title">{item.title}</h6>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Feature;

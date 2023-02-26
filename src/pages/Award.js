import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Hack with infy: Qualified LEVEL 2 of hack with infy organized by infosys india
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Co-ordinator at NIET technology business incubator
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                  Delivered Python lectures to college juniors , covering fundamental programming concepts, data structures and algorithms .
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;

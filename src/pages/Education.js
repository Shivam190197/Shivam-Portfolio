import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Noida institute of engg. And technology</h3>
                <div class="subheading mb-3">Bachelor of Technology</div>
                <div>Computer Science and Engineering </div>
                <p>CGPA: 7.6</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2016 - September 2020</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Dr. Virendra Swaroop Education Centre</h3>
                <div class="subheading mb-3">Subjects : Physics , chemistry , Maths</div>
                <p>Percentage: 88.8</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2013 - May 2015</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;

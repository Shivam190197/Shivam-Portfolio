import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-gulp"></i>
              </li>
              <li class="list-inline-item">
                <i class="fas fa-database"></i>
              </li> 
              <li class="list-inline-item">
              <i class="fab fa-python"></i>
              </li>
              <li class="list-inline-item">
              <i class="fab fa-github"></i>
              </li>
            </ul>
            <p>A developer with skills in React JS, Node JS, Express Js, Redux, JSON, my Sql, mongoDB, Javascript, Python,
               Html, SQL, MongoDB, SQL, Git, bit bucket, git lab, and Postman is well-equipped to build dynamic, scalable, 
               and efficient web applications. With knowledge of both frontend and backend technologies, they can develop and 
               integrate complex features and functionalities seamlessly. They can easily manage data using MongoDB and SQL databases, 
               and track changes using Git and other version control tools. Moreover, they can test APIs and debug applications 
               using Postman, ensuring smooth and error-free user experience.</p>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                APIs Development
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Agile Development & Scrum
              </li>

            </ul>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Skills;

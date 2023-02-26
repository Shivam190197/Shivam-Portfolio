import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Full Stack Developer</h3>
                <div class="subheading mb-3">Paxcom India Pvt. Ltd., gurgaon</div>
                <div class="subheading mb-3"></div>
                <p>
                  Drutas is a task management platform designed to streamline the operations of organizations. As a developer, I was responsible for various aspects of the project, including:
                  <li>Customized Task Grid View: Designed and created a customizable view of the task grid that allows users to select the columns they want to view. </li>
                  <li>Task Features: Implemented key task features such as task description, task followers, and activity log using React components.  </li>
                  <li>SuperAdmin Console: Developed APIs using Node and Express and sql to retrieve data such as organization details, projects, tasks, active and inactive users in Drutas.  </li>
                  <li>Streams: Worked on both frontend and backend to enable the sharing of information between SuperAdmin, Team Admin, and Project Lead with their respective teams.  </li>
                  <li>Themes: Implementing a theme feature in Drutas that gives users the option to switch between light and dark themes using React and Gulp.   </li>
                  <li>Responsible for improving the code structure and making it more reusable by breaking down complex components into smaller ones.  </li>
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">December 2021 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">System Engineer</h3>
                <div class="subheading mb-3">Infosys</div>
                <p>
                  As a Developer, I utilized ReactJS and HTML5 to work on a document management system for a British client specializing
                  in consumer goods.
                  <li>Document Management System Design: Developed the front-end of the system using ReactJS to archive and retrieve documents efficiently. </li>
                  <li>Admin Components: Created components for the admin panel to enable them to manage the authorization process for end-users </li>
                  In this project, I leverage my expertise in ReactJS and HTML5 to deliver a robust and user-friendly document management solution to the client while also
                  ensuring its stability and reliability through bug fixing and technical support.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">November 2020 - November 2021</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Experience;

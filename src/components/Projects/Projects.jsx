import React from "react";
import "../../scss/Projects.scss";

function Projects() {
  const projects = [
    {
      name: "Henry games",
      image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/henrygames.jpg?alt=media&token=3ce9e560-597a-4d67-91bb-0e284f6347e4",
      desc: "Henry Games is a videgames gallery that uses the rawg api. Also have an option to create a videgame that is saved in a database.",
      link: "https://henry-games.vercel.app",
      github: "https://github.com/cristian-hr/VideogamesAPP",
    },
    {
      name: "Digital Art",
      image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/digitalart.jpg?alt=media&token=0da462ba-f37b-48c6-8fe9-3c37092a1dc3",
      desc: "Digital Art is an e-commerse built from scratch using React, Redux, Node.js, Express and Sequelize. It has authentication with Firebase and Google, two factor authentication with Authy, emails services with Sendgrid and payments methods with Paypal and Stripe.",
      link: "https://digitalart-front.vercel.app",
      github: "https://github.com/cristian-hr/Digital-Art-Ecommerce",
    },
    {
      name: "Portfolio",
      image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/portfolio.jpg?alt=media&token=12245ce4-96c9-4a87-8117-0213e5db988e",
      desc: "This Portfolio is the current website that you are seeing. It's made with React in the frontend and Express.js in the backend with full ES6 support. The frontend was deployed in Github Pages and the backend in Firebase. Also uses Sendgrind for the email service.",
      link: "https://cristian-hr.github.io/",
      github: "https://github.com/cristian-hr/cristian-hr.github.io",
    },
    {
      name: "Tic Tac Toe Online",
      image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/tictactoe.jpg?alt=media&token=bbab85a0-0760-4610-bcde-43ed29a1dad5",
      desc: "This is the classic Tic Tac Toe game but you can play online with other person.",
      link: "https://tic-tac-toe-gato.vercel.app/",
      github: "https://github.com/cristian-hr/Tic-Tac-Toe",
    },
    {
      name: "PostApp",
      image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/postapp.jpg?alt=media&token=8d9ab899-7eae-41a0-a1ce-4c53c913b966",
      desc: "PostApp is a simple app that allows you to make a post, search for post and see all the post.",
      link: "https://post-app-front.vercel.app",
      github: "https://github.com/cristian-hr/PostAPP",
    },
  ];

  return (
    <div className="projects">
      <span className="titleProjects">Projects</span>
      <div className="contProjects">
        {projects.map((project, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="cardsProject">
            <div>
              <div className="divNameProject">
                <span className="nameProject">{project.name}</span>
              </div>
              <img src={project.image} alt="" />
              <div className="divDescProjects">
                <span className="descProject">{project.desc}</span>
              </div>
            </div>
            <div className="linksProjects">
              <a href={project.link}>Link</a>
              <a href={project.github}>Github</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

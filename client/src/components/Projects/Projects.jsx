import "../../scss/Projects.scss"

function Projects () {

    const projects = [
        {
            name: "Henry games",
            image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/henrygames.jpg?alt=media&token=3ce9e560-597a-4d67-91bb-0e284f6347e4",
            desc:"Henry Games is a videgames gallery that uses the rawg api. Also have an option to create a videgame that is saved in a database.",
            link: "https://henry-games.vercel.app",
            github: "https://github.com/cristian-hr/VideogamesAPP"
        },
        {
            name: "Digital Art",
            image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/digitalart.jpg?alt=media&token=0da462ba-f37b-48c6-8fe9-3c37092a1dc3",
            desc:"Digital Art is an e-commerse built from scratch using React, Redux, Express and Sequelize. It has authentication with Firebase and Google, two factor authentication with Authy, emails services with Sendgrid and payments methods with Paypal and Stripe.",
            link: "https://digitalart-front.vercel.app",
            github: "https://github.com/cristian-hr/Digital-Art-Ecommerce"
        },
        {
            name: "PostApp",
            image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/postapp.jpg?alt=media&token=8d9ab899-7eae-41a0-a1ce-4c53c913b966",
            desc:"PostApp is a simple app that allows you to make a post, search for post and see all the post.",
            link: "https://post-app-front.vercel.app",
            github: "https://github.com/cristian-hr/PostAPP"
        },
        {
            name: "ChronoApp",
            image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/chronoapp.jpg?alt=media&token=bfb35c42-73bb-4c54-b5ec-d8322bbf10dc",
            desc:"ChronoApp is a stopwatch app that allows you to records a time and also show all the times saved in the database. The project has unitary tests in the front-end and in the back-end. Also it has full Docker implementation.",
            link: " ",
            github: "https://github.com/cristian-hr/ChronoAPP"
        },
        {
            name: "ParkingLots App",
            image: "https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/parkinglotsapp.jpg?alt=media&token=521ab115-e601-42c9-9768-ea9923062229",
            desc: "ParkingLots App is a searching app that looks for parking lots in the city that the user look for",
            link: "https://parking-lots-app.vercel.app/",
            github: "https://github.com/cristian-hr/ParkingLotsAPP"
        },
    ]

    return (
        <div className="projects">
            <span className="titleProjects">Projects</span>
            <div className="contProjects">
                {projects.map((project, index) => {
                    return (
                        <div className="cardsProject">
                            <span className="nameProject">{project.name}</span>
                            <img src={project.image} alt="" />
                            <span className="descProject">{project.desc}</span>
                            <div>
                                <a href={project.link}>Link</a>
                                <a href={project.github}>Github</a>
                            </div>                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects

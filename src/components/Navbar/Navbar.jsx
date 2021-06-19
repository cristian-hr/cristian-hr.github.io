import "../../scss/Navbar.scss"

function Navbar(props) {

    return (
        <div className="navBar">
            <button className="buttonNavBar" onClick={()=>props.executeScroll(props.homeRef)}>Home</button>
            <span className="barNB">|</span>
            <button className="buttonNavBar" onClick={()=>props.executeScroll(props.projectsRef)}>Projects</button>
            <span className="barNB">|</span>
            <button className="buttonNavBar" onClick={()=>props.executeScroll(props.skillsRef)}>Skills</button>
            <span className="barNB">|</span>
            <button className="buttonNavBar" onClick={()=>props.executeScroll(props.contactRef)}>Contact</button>
        </div>
    )
}

export default Navbar

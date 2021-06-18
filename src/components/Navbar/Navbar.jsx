import "../../scss/Navbar.scss"

function Navbar(props) {

    return (
        <div className="navBar">
            <span className="buttonNavBar" onClick={()=>props.executeScroll(props.homeRef)}>Home</span>
            <span className="barNB">|</span>
            <span className="buttonNavBar" onClick={()=>props.executeScroll(props.projectsRef)}>Projects</span>
            <span className="barNB">|</span>
            <span className="buttonNavBar" onClick={()=>props.executeScroll(props.aboutRef)}>About</span>
            <span className="barNB">|</span>
            <span className="buttonNavBar" onClick={()=>props.executeScroll(props.contactRef)}>Contact</span>
        </div>
    )
}

export default Navbar

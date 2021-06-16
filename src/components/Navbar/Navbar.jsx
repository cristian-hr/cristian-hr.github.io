import { Link } from "react-router-dom"
import "../../scss/Navbar.scss"

function Navbar() {

    return (
        <div className="navBar">
            <Link className="linksClass" to="/portfolio/">Home</Link>
            <span className="barNB">|</span>
            <Link className="linksClass" to="/portfolio/projects">Projects</Link>
            <span className="barNB">|</span>
            <Link className="linksClass" to="/portfolio/about">About</Link>
            <span className="barNB">|</span>
            <Link className="linksClass" to="/portfolio/contact">Contact</Link>
        </div>
    )
}

export default Navbar

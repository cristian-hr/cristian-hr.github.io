import { Link } from "react-router-dom"
import "../../scss/Navbar.scss"

function Navbar() {

    return (
        <div className="navBar">
            <Link className="linksClass" to="/">Home</Link>
            <span className="barNB">|</span>
            <Link className="linksClass" to="/projects">Projects</Link>
            <span className="barNB">|</span>
            <Link className="linksClass" to="/about">About</Link>
            <span className="barNB">|</span>
            <Link className="linksClass" to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar

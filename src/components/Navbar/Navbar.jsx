import { Link } from "react-router-dom"
import "../../scss/Navbar.scss"

function Navbar() {

    return (
        <div className="navBar">
            <Link className="linksClass" to="/">Home</Link>
            <span className="barNB">|</span>
            <Link className="linksClass" to="/">Projects</Link>
            <span className="barNB">|</span>
            <Link className="linksClass" to="/">About</Link>
            <span className="barNB">|</span>
            <Link className="linksClass" to="/">Contact</Link>
        </div>
    )
}

export default Navbar

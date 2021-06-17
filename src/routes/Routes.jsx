import { BrowserRouter, Route } from 'react-router-dom';
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Projects from "../components/Projects/Projects"

function routes () {
    return (
    <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
    </BrowserRouter>
    )
}

export default routes;

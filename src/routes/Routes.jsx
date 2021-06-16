import { BrowserRouter, Route } from 'react-router-dom';
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Projects from "../components/Projects/Projects"

function routes () {
    return (
    <BrowserRouter>
        <Route path="/portfolio/" component={Navbar} />
        <Route exact path="/portfolio/" component={Home} />
        <Route path="/portfolio/about" component={About} />
        <Route path="/portfolio/contact" component={Contact} />
        <Route path="/portfolio/projects" component={Projects} />
    </BrowserRouter>
    )
}

export default routes;

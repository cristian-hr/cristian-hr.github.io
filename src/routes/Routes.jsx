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
        <Route path="/" component={Home} />
        <Route path="/" component={Projects} />
        <Route path="/" component={About} />
        <Route path="/" component={Contact} />
    </BrowserRouter>
    )
}

export default routes;

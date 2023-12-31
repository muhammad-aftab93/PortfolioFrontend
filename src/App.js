import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Education from "./pages/Education";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import WorkDetails from "./pages/WorkDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/education" component={Education} exact />
        <Route path="/works" component={Works} exact />
        <Route path="/works/:id/:title" component={WorkDetails} />
        <Route path="/work-details/:id/:title" component={WorkDetails} />
        <Route path="/contact" component={Contact} exact />

      </Switch>
    </BrowserRouter>
  );
}

export default App;

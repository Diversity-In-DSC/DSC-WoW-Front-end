// Shared Components
import Sidebar from "./shared_components/sidebar";
import Map from "./map";
import "bootstrap/dist/css/bootstrap.min.css";

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Sections
import Landing from "./sections/landing";
import About from "./sections/about";
import Schedule from "./sections/schedule";
import Speakers from "./sections/speakers";
import Sponsors from "./sections/sponsors";
import Faq from "./sections/faq";
import Discord from "./sections/discord";
import SponsorCard from "./sections/sponsorcard";
import Footer from "./sections/footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/clubs" exact>
          <Map />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <>
      <Sidebar />

      <main>
        <Landing />

        <About />

        <Schedule />

        <Speakers />

        <Sponsors />

        <SponsorCard />

        <Discord />

        <Faq />

        <Footer />
      </main>
    </>
  );
};

export default App;

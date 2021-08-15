import './App.css';
import Header from './components/generalComponents/Header';
import Footer from './components/generalComponents/Footer';
import Home from './components/Home/Home';
import OurWork from './components/OurWork/OurWork';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Forms from './components/Forms/Forms'
import Cookies from './components/generalComponents/FooterLinks/Cookies'
import Jobs from './components/generalComponents/FooterLinks/Jobs' 
import Privacy from './components/generalComponents/FooterLinks/Privacy'
import TandC from './components/generalComponents/FooterLinks/TandC'
import WorkShops from './components/WorkShops/WorkShops';
import Kenya from './components/LinkedPages/Kenya';
import Nigeria from './components/LinkedPages/Nigeria';
import Recent from './components/LinkedPages/Recent';
import Remote from './components/LinkedPages/Remote';
import UK from './components/LinkedPages/UK';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/forms" component={Forms} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/tandc" component={TandC} />
          <Route path="/workshops" component={WorkShops} />
          <Route path="/kenya" component={Kenya} />
          <Route path="/nigeria" component={Nigeria} />
          <Route path="/recent" component={Recent} />
          <Route path="/remote" component={Remote} />
          <Route path="/uk" component={UK} />
        </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

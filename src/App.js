import './App.css';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Features from './pages/Features/Features';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Footer from './pages/News/Footer';
import Review from './pages/Review/Review';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/fea' component={Features}/>
      <Route path='/about' component={About}/>
      <Route path="/ga" component={Gallery}/>
      <Route path='/re' component={Review}/>
      <Route path='/cont' component={Contact}/>
      
      </Switch>
      <Footer/>
     
      </Router>
      
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/landing/landing';
import Home from './components/home/home';
import Nueva from './components/nuevaRaza/nueva';
import Detalles from './components/detalles/detalles'
import Error404 from './components/errors/error404';
import Favorites from './components/favorites/favorites';



function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
        {/* <Route path="/create/:id" component={Nueva}/> */}
        <Route exact path="/create" component={Nueva}/>
        <Route exact path="/favs" component={Favorites}/>
        <Route exact path="/home/:id" component={Detalles}/>
        
        {/* <Route path="/search/:name" component={SearchName}/> */}
        <Route path="*" component={Error404}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

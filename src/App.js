import React from 'react';
import { Router,Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import WorkShop from './Pages/WorkShop';
import Event from './Pages/Event';
import './sass/main.scss';

function App() {
  return (
      <div>
            <Switch>
                  <Route 
                        exact
                        path='/'
                        render= {() => <Home />}
                  />
                  <Route 
                        exact
                        path='/workshops'
                        render= {() =>  <WorkShop />}
                  />
                  <Route 
                        exact
                        path='/events'
                        render= {() => <Event /> }
                  />
                  <Route 
                        exact
                        render= {() => <h1>404 Page not found..</h1> }
                  />
            </Switch>
      </div>
  );
}

export default App;

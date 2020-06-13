import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import WorkShop from './Pages/WorkShop';
import IndividualWorkShop from './Pages/IndividualWorkShop';
import Event from './Pages/Event';

import findWorkShop from './Helpers/findWorkShop';

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
                        path='/workshops/:workshop_id'
                        render= {(routeProps) =>  {
                              const id = routeProps.match.params.workshop_id;
                              const workshop = findWorkShop(id);
                              return <IndividualWorkShop {...workshop} />;
                        }}
                  />
                  <Route 
                        exact
                        path='/tech-nonTech-events'
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

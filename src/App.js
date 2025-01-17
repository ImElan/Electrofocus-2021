import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import WorkShop from './Pages/WorkShop';
import IndividualWorkShop from './Pages/IndividualWorkShop';
import Event from './Pages/Event';
import IndividualEvent from './Pages/IndividualEvent';
import TechEvents from './Pages/TechEvents';
import NonTechEvents from './Pages/NonTechEvents';
import RegisterPage from './Pages/RegisterPage';
import ContactPage from './Pages/ContactPage';
import AccomodationPage from './Pages/AccomodationPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';

import findWorkShop from './Helpers/findWorkShop';
import findEvent from './Helpers/findEvent';

import './sass/main.scss';
import PageNotFound from './Pages/PageNotFound';

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
                        path='/techEvents'
                        render= {() => <TechEvents /> }
                  />
                  <Route 
                        exact
                        path='/techEvents/:event_id'
                        render= {(routeProps) =>  {
                              const id = routeProps.match.params.event_id;
                              const event = findEvent(id,'techEvents');
                              return <IndividualEvent {...event} />;
                        }}
                  />
                  <Route
                        exact
                        path='/nonTechEvents'
                        render= {() => <NonTechEvents /> }
                  />
                  <Route 
                        exact
                        path='/nonTechEvents/:event_id'
                        render= {(routeProps) =>  {
                              const id = routeProps.match.params.event_id;
                              const event = findEvent(id,'nonTechEvents');
                              return <IndividualEvent {...event} />;
                        }}
                  />
                  <Route
                        exact
                        path='/register'
                        render={ () => <RegisterPage />}
                  />
                  <Route
                        exact
                        path='/contact/:issue_id'
                        render={ (routeProps) => <ContactPage {...routeProps} />}
                  />
                  <Route
                        exact
                        path='/accomodation'
                        render={ () => <AccomodationPage />}
                  />
                  <Route
                        exact
                        path='/privacyPolicy'
                        render={ () => <PrivacyPolicyPage />}
                  />
                  <Route 
                        exact
                        render= {() => <PageNotFound /> }
                  />
            </Switch>
      </div>
  );
}

export default App;

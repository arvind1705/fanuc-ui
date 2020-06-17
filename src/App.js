import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import {routes} from './Routes'

function App() {
  return (
      <Switch>
      {routes.map((route,i)=>
          <Route key={i} exact={route.subRoutes.some(r=>r.exact)} path={route.subRoutes.map(r=>r.path)}>
            <route.layout>
              {route.subRoutes.map((subRoute,i)=>
                <Route key={i} {...subRoute} />
              )}
            </route.layout>
          </Route>
        )}  
         <Redirect to="/not-found" />    
      </Switch>
  );
}

export default App;

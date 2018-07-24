import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Bundle from './Bundle';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="test">
          <h1>ejs</h1>
          <ul className="navs">
            <% routes.forEach(function(route) {%>
              <li key="<%=route.path%>">
                <Link to="<%=route.path%>"><%=route.name%></Link>
              </li>
            <%})%>
          </ul>
          <div className="content">
            <Switch>
              <% routes.forEach(function(route) {%>
                <Route path="<%=route.path%>" exact
                  component={(props) => {
                    return (
                      <Bundle load={() => import(
                        /* webpackChunkName: "<%=route.name%>" */
                        './pages/<%=route.filepath%>'
                      )}>
                          {(Comp) => <Comp {...props}/>}
                      </Bundle>
                    )
                  }}/>
              <%})%>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

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
          <h1>handlebars</h1>
          <ul className="navs">
            {{#each routes}}
              <li key="{{this.path}}">
                <Link to="{{this.path}}">{{{this.name}}}</Link>
              </li>
            {{/each}}
          </ul>
          <div className="content">
            <Switch>
              {{#each routes}}
                <Route path="{{this.path}}" exact
                  component={(props) => {
                    return (
                      <Bundle load={() => import(
                        /* webpackChunkName: "{{this.name}}" */
                        './pages/{{this.filepath}}'
                      )}>
                          {(Comp) => <Comp {...props}/>}
                      </Bundle>
                    )
                  }}/>
              {{/each}}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

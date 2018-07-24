import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="test">
        <h1>handlebars</h1>
        <div className="foo">
          {{foo}}
        </div>

        <div className="bar">
          {{bar}}
        </div>
      </div>
    )
  }
}

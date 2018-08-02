import * as React from 'react';
import './App.pcss';
import {Link} from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <p>
              <Link to="/user">
                  User
              </Link>
          </p>
      </div>
    );
  }
}

export default App;

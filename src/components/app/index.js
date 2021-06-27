import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import '../../css/app.css';
import NavHorizontal from "../NavHorizontal";
import NavVertical from '../NavVertical';
import Auth from '../../auth/auth';
import Callback from '../../callback'
import Profile from '../profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Route render={props => <NavHorizontal auth={this.auth} {...props} />} />
          <Route path="/callback" exact render={props => <Callback auth={this.auth} {...props} />} />
          <Route
            path="/profile" exact
            render={props => this.auth.isAuthenticated() ? <Profile auth={this.auth} {...props} /> : <Redirect to="/" />}
          />
        </div>
      </React.Fragment>
  );
  }
}

export default App;
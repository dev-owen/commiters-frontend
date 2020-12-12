import {Provider} from 'react-redux';
import React, { Component } from 'react';
import {createStore} from 'redux';
import {
  Route,
  Switch
} from 'react-router-dom';
import NotFound from './components/NotFound'
import Ranking from './routes/Ranking'
import SideProject from './routes/SideProject'
import TechRSS from './routes/TechRSS'
import Community from './routes/Community'
import './App.css';
import DashboardContainer from './store/DashboardContainer';
import OAuth2RedirectHandlerContainer from './store/OAuth2RedirectHandlerContainer';
import MyProfileContainer from './store/MyProfileContainer';
import reducer from './reducers';

const store = createStore(reducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={DashboardContainer}></Route>
          <Route path="/MyProfile" component={MyProfileContainer} ></Route>
          <Route path="/Ranking" component={Ranking} ></Route>
          <Route path="/SideProject" component={SideProject} ></Route>
          <Route path="/TechRSS" component={TechRSS} ></Route>
          <Route path="/Community" component={Community} ></Route>
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandlerContainer} ></Route>
          <Route path="/notification" component={Notification}></Route>
          <Route path="/error" component={NotFound}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Provider>
    )
  }
}

export default App;

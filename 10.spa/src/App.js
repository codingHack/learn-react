import React from 'react';
import {Route,Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import './App.css';

const App = ()=> {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/codingHack">codingHack 프로필</Link>
        </li>
        <li>
          <Link to="/profile/weeyeungjung">weeyeungjung 프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}/>
      <Route path={['/about','/info']} component={About}/>
      <Route path="/profile/:username" component={Profile}/>
    </div>
  );
}

export default App;

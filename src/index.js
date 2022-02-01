import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import AppView from './component/appView';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import loginView from './component/login';
import Register from './component/register';
import Logout from './component/logout';
import View from './component/oddajRzeczy';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAS48etIvlJaTGi4x8YQfeE5N9DMNVX9ds",
  authDomain: "my-portfolio-project-91d94.firebaseapp.com",
  projectId: "my-portfolio-project-91d94",
  storageBucket: "my-portfolio-project-91d94.appspot.com",
  messagingSenderId: "522108625565",
  appId: "1:522108625565:web:57c7ce0a52989d90112a74"
};


const app = initializeApp(firebaseConfig);



console.log(app)

const ReactRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={AppView} />
          <Route exact path='/login' component={loginView} />
          <Route exact path='/rejestracja' component={Register} />
          <Route exact path='/wylogowano' component={Logout} />
          <Route exact path='/oddaj-rzeczy' component={View} />
        </Switch>     
    </Router>
  )
}



ReactDOM.render(
   <ReactRouter />,
  document.getElementById('root')
);



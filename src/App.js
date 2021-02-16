import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Layout} from "./components/header_footer/";
import './App.css';
import {Login, Register} from "./components/auth";
import {NotFound} from './components/pages/index';

function App() {
  return (
    <>
    <BrowserRouter>
          <Layout>
              <Switch>
                  <Route path='/register' component={Register}/>
                  <Route path='/login' component={Login}/>
                  <Route component={NotFound } />
              </Switch>
          </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import Button from "@material-ui/core/Button";
import {Layout} from "./components/header_footer/";
import './App.css';

function App() {
  return (
    <>
      <Layout>
          <Button variant="contained" color="primary">
              Hello World
          </Button>
      </Layout>
    </>
  );
}

export default App;

import React from 'react';
import { connect } from 'react-redux';

//Material UI
import Button from '@material-ui/core/Button';

const Home = props => (
  <div>
    <h1>Hello, world!</h1>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

export default connect()(Home);

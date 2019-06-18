import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const HomePage = () => (
  <Container>
    <Typography>
      <Typography variant="h1" component="h2" gutterBottom>
        Home Page
      </Typography>
      <Link component={RouterLink} to="/login">
        Login
      </Link>
    </Typography>
  </Container>
);

export default HomePage;

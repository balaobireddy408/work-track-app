import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
import PageHeader from "../../pages/pageHeader";
import PageFooter from "../../pages/pageFooter";
import ContactUs from "../../pages/contactUs";
import AboutUs from "../../pages/aboutUs";
import Login from "../../pages/login";
import * as Routes from "../../routes/Routes";

const Home = () => {
  return (
    <Router>
      <PageHeader />
      <Route path={Routes.ContactUs} component={ContactUs} />
      <Route path={Routes.AboutUs} component={AboutUs} />
      <Route path={Routes.Login} component={Login} />
      <PageFooter />
    </Router>
  );
};

export default Home;

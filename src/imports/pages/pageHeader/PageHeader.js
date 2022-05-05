import React from "react";

import Link from "../../molecules/Link";
import * as Routes from "../../routes/Routes";
import { Box } from "./styledComponents";

const PageHeader = () => {
  return (
    <Box>   
      <Link pageUrl={Routes.Home}  label="Home" />
      <Link pageUrl={Routes.ContactUs} label="Contact Us" />
      <Link pageUrl={Routes.AboutUs} label="About Us" />
      <Link pageUrl={Routes.Login} label="Login" />
      {/* <img alt="test" src="/images/cpd_logo.PNG"/> */}
    </Box>
  );
};

export default PageHeader;

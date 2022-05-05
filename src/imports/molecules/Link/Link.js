import React from "react";

import { LinkDiv } from "./styledComponent";

const Link = props => {
  return (
    <LinkDiv>
      <a href={props.pageUrl}>{props.label}</a>
    </LinkDiv>
  );
};

export default Link;

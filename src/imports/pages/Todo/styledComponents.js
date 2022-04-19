import styled from "styled-components";
import Button from "@material-ui/core/Button";

const PrimaryButton = styled(Button)`
  && {
    color: white;
    margin-right: 10px;
  }
`;

const Section = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 300px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: black;
  line-height: 24px;
`;

export { Section, Title,PrimaryButton };

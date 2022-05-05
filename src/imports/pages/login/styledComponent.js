import styled from "styled-components";
import Button from "@material-ui/core/Button";

const PrimaryButton = styled(Button)`
  && {
    color: white;
    margin-right: 10px;
  }
`;

const Panel = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
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

export { Panel, Section, PrimaryButton };

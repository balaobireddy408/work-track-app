import React from "react";
import TextField from "@material-ui/core/TextField";

import useForm from "../../hooks/useForm";

import { Panel, Section, PrimaryButton } from "./styledComponent";

const Login = () => {
  const save = () => {
    // alert(`User Created!
    //        username: ${inputs.username}
    //        password: ${inputs.password}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useForm(save);

  return (
    <form onSubmit={handleSubmit}>
      <Section>
        <div>
          <div>
            <TextField
              id="standard-basic"
              label="user name"
              margin="normal"
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="password"
              margin="normal"
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <Panel>
          <PrimaryButton variant="contained" color="primary" type="submit">
            Login
          </PrimaryButton>
          <PrimaryButton variant="contained" color="default">
            Cancel
          </PrimaryButton>
        </Panel>
      </Section>
    </form>
  );
};

export default Login;

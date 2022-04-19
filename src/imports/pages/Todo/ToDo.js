import React from 'react';
import { Section, Title,PrimaryButton } from "./styledComponents";
import TextField from "@material-ui/core/TextField";

const ToDo = () => {
  return (
    <Section>
      <Title>Create Task Item</Title>
      <div>
            <TextField   label="Enter Task Name" margin="normal" type="text" name="taskname"/>
      </div>
      <div>
            <TextField   label="Enter Task Description" margin="normal" type="text" name="description"/>
      </div>
      <div>
          <PrimaryButton variant="contained" color="primary" type="submit">
            Save
          </PrimaryButton>
          <PrimaryButton variant="contained" color="default">
            Cancel
          </PrimaryButton>
      </div>
    </Section>
  );
};

export default ToDo;
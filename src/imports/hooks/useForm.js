import React, { useState } from "react";

const useForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    callback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useForm;

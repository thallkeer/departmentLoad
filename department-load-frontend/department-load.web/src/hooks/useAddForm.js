import { useState } from "react";

export const useAddForm = callback => {
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      callback();
    }
  };

  const [inputs, setInputs] = useState({});

  const handleInputChange = event => {
    event.persist();
    console.log(inputs);
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

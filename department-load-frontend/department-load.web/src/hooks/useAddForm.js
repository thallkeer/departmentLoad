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
    const { name, value } = event.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

import { useState } from "react";

export const useAddForm = (model, modelName, onSubmit) => {
  const [formState, setFormState] = useState(model);
  const isEditing = !Object.is(model, null);
  const title = isEditing ? `Edit ${modelName}` : `Add ${modelName}`;
  const submitBtnText = isEditing ? "Save changes" : "Submit";
  const lowerName = modelName.toLowerCase();

  const handleSubmit = () => {
    onSubmit(JSON.stringify(formState));
  };

  const handleInputChange = e => {
    e.persist();
    const { name, value } = e.target;

    const newState = { ...formState };
    setNestedKey(newState, name.split("."), value);

    setFormState({
      ...newState
    });
  };

  const setNestedKey = (obj, path, value) => {
    if (path.length === 1) {
      obj[path] = value;
      return;
    }
    return setNestedKey(obj[path[0]], path.slice(1), value);
  };

  return {
    formState,
    handleSubmit,
    handleInputChange,
    title,
    submitBtnText,
    lowerName
  };
};

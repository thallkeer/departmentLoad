import { useState } from "react";

const useModal = (updateFunction, createFunction) => {
  const [isShowing, setIsShowing] = useState(false);
  const [submitFunction, setSubmitFunction] = useState(null);
  const [editableEntity, setEditableEntity] = useState({});

  function toggle() {
    setIsShowing(!isShowing);
  }

  const editEntity = entity => {
    setEditableEntity(entity);
    setSubmitFunction(() => updateFunction);
    toggle();
  };

  const createEntity = () => {
    setEditableEntity(null);
    setSubmitFunction(() => createFunction);
    toggle();
  };

  return {
    isShowing,
    toggle,
    submitFunction,
    editEntity,
    createEntity,
    editableEntity
  };
};

export default useModal;

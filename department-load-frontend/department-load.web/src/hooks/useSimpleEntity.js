import { useState, useEffect } from "react";
import axios from "../axios/axios";

export const useSimpleEntity = url => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    axios.get(`${url}/`).then(result => {
      setEntities(result.data);
      console.log(result.data);
    });
  }, []);

  const addEntity = entity => {
    console.log(entity);
    axios.post(`${url}/add`, entity).then(res => {
      console.log(res);
      console.log(res.data);
      setEntities([...entities, res.data]);
    });
  };

  const updateEntity = entity => {
    axios.put(`${url}/update`, entity).then(res => {
      console.log(res);
      console.log(res.data);
      setEntities(entities.map(e => (e.id === entity.id ? entity : e)));
    });
  };

  const deleteEntity = id => {
    axios.delete(`/${url}/${id}`).then(res => {
      console.log(res);
      setEntities(entities.filter(e => e.id !== id));
    });
  };

  return { entities, addEntity, updateEntity, deleteEntity };
};

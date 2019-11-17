import { useState, useEffect } from "react";
import axios from "../axios/axios";

export const useAxios = url => {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${url}/`).then(result => {
      setEntities(result.data);
    });
    setLoading(false);
  }, [url]);

  const addEntity = entity => {
    console.log("hello", entity);
    axios
      .post(`${url}/add`, entity, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept"
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setEntities([...entities, res.data]);
      });
  };

  const updateEntity = entity => {
    axios
      .put(`${url}/update`, entity, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept"
        }
      })
      .then(res => {
        console.log(res.data);
        setEntities(entities.map(e => (e.id === entity.id ? entity : e)));
      });
  };

  const deleteEntity = (id, keyFieldName) => {
    keyFieldName = keyFieldName ? keyFieldName : "id";
    axios.delete(`/${url}/${id}`).then(res => {
      setEntities(entities.filter(e => e[keyFieldName] !== id));
    });
  };

  return [entities, loading, addEntity, updateEntity, deleteEntity, getById];
};

export const getById = (url, id) => {
  axios.get(`${url}/${id}`).then(result => {
    console.log(result.data);

    return result.data;
  });
};

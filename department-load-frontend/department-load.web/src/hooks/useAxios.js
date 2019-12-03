import { useState, useEffect } from "react";
import axios from "../axios/axios";
import { ACCESS_TOKEN } from "../constants";

export const useAxios = url => {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);

  const getConfig = () => {
    const token = `Bearer ${localStorage.getItem(ACCESS_TOKEN) || ""}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    };

    return config;
  };

  useEffect(() => {
    if (url) {
      axios.get(`${url}/`).then(result => {
        setEntities(result.data);
      });
    }
    setLoading(false);
  }, [url]);

  const addEntity = entity => {
    axios.post(`${url}/add`, entity, getConfig()).then(res => {
      setEntities([...entities, res.data]);
    });
  };

  const updateEntity = entity => {
    axios.put(`${url}/update`, entity, getConfig()).then(res => {
      entity = res.data;
      setEntities(entities.map(e => (e.id === entity.id ? entity : e)));
    });
  };

  const deleteEntity = (id, keyFieldName) => {
    keyFieldName = keyFieldName ? keyFieldName : "id";
    axios.delete(`/${url}/${id}`, getConfig()).then(res => {
      setEntities(entities.filter(e => e[keyFieldName] !== id));
    });
  };

  return [entities, loading, addEntity, updateEntity, deleteEntity, getById];
};

export const getById = (url, id) => {
  if (id === null) return null;
  axios.get(`${url}/${id}`).then(result => {
    return result.data;
  });
};

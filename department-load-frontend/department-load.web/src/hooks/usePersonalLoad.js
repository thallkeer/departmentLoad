import { useState, useEffect } from "react";
import axios from "../axios/axios";

export const usePersonalLoad = () => {
  const [personalLoads, setPersonalLoads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`personalLoad/`).then(result => {
      setPersonalLoads(result.data);
      console.log(result.data);
    });
    setLoading(false);
  }, []);

  return { personalLoads, loading };
};

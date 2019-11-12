import { useState, useEffect } from "react";
import axios from "../axios/axios";

export const usePersonalLoad = () => {
  const [personalLoads, setPersonalLoads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`personalLoad/`).then(result => {
      setPersonalLoads(result.data);
    });
    setLoading(false);
  }, []);

  return { personalLoads, loading };
};

export const usePersonalStudies = () => {
  const [studyTypes, setStudyTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`personalStudy/`).then(result => {
      setStudyTypes(result.data);
    });
    setLoading(false);
  }, []);

  return { studyTypes, loading };
};

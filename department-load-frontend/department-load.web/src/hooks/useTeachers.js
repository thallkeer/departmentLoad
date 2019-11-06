import { useState, useEffect } from "react";
import axios from "../axios/axios";

export const useTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get("teacher/").then(result => {
      setTeachers(result.data);
    });
  }, []);

  const addTeacher = teacher => {
    axios
      .post("teacher/add", teacher, {
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
        setTeachers([...teachers, res.data]);
      });
  };

  const updateTeacher = teacher => {
    axios.put("teacher/update", teacher).then(res => {
      console.log(res);
      console.log(res.data);
      setTeachers(
        teachers.map(t => (t.teacherId === teacher.teacherId ? teacher : t))
      );
    });
  };

  const deleteTeacher = id => {
    axios.delete(`/teacher/${id}`).then(res => {
      console.log(res);
      setTeachers(teachers.filter(t => t.teacherId !== id));
    });
  };

  return { teachers, addTeacher, updateTeacher, deleteTeacher };
};

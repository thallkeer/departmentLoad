import { useState, useEffect } from "react";
import axios from "axios";

export const useUser = () => {
  const hostname = window.location.hostname;
  const urlPattern = `http://${hostname}:8080/api/auth/signup`;

  const register = user => {
    axios.post(urlPattern, user).then(res => {
      console.log(res.data);
    });
  };

  return { register };
};

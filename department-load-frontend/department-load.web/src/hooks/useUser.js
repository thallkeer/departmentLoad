import { useState } from "react";
import axios from "axios";
import { ACCESS_TOKEN } from "../constants";
import history from "../history";

export const useUser = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(ACCESS_TOKEN) !== null
  );
  const hostname = window.location.hostname;
  const urlPattern = `http://${hostname}:8080/api/auth/`;
  const headers = {
    "Content-Type": "application/json"
  };

  const login = user => {
    axios
      .post(urlPattern + "signin", user, {
        headers
      })
      .then(res => {
        localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
        setAuthenticated(true);
        history.push("/home");
      })
      .catch(err => console.log(err));
  };

  const logoff = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setAuthenticated(false);
    history.push("/");
  };

  // const register = user => {
  //   axios.post(urlPattern + "signup", user, { headers }).then(res => {
  //     window.location.href = "/signin";
  //   });
  // };

  return new UserState(login, logoff, authenticated, setAuthenticated);
};

export class UserState {
  constructor(login, logoff, authenticated, setAuthenticated) {
    this.login = login;
    this.logoff = logoff;
    this.authenticated = authenticated;
    this.setAuthenticated = setAuthenticated;
  }
}

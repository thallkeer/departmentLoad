import axios from "axios";
import { ACCESS_TOKEN, API_BASE_URL } from "../constants";

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json"
  };

  if (localStorage.getItem(ACCESS_TOKEN))
    headers.append(
      "Authorization",
      "Bearer" + localStorage.getItem(ACCESS_TOKEN)
    );

  return headers;
};

export default axios.create({
  baseURL: API_BASE_URL,
  headers: getHeaders()
});

import axios from "axios";

export const userdata = () => {
  const BASE_URL = "https://randomuser.me/api/?results=15";
  return axios.get(BASE_URL).then((res) => res.data.results);
};

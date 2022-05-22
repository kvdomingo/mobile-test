import axios from "axios";

const baseURL = "https://check-in-api-o2564skiua-de.a.run.app/v0.1";

const axi = axios.create({ baseURL });

const api = {
  getProjects() {
    return axi.get("/project");
  },
};

export default api;

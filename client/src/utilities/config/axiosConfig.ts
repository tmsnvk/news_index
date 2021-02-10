import axios from "axios";
import { BACKEND_ROOT } from "utilities/helpers/constants";

const instance = axios.create({
  baseURL: BACKEND_ROOT,
  timeout: 10000,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }
});

export default instance;
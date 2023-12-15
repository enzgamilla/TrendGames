import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "bc513aba0a634bd280574673fcb5f59d",
  },
});

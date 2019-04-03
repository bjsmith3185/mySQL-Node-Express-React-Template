import axios from "axios";

export default {
  getNames: function() {
    return axios.get("/api/model");
  },

  addName: function(data) {
    return axios.post("/api/model", data);
  }
};

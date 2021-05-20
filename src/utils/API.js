import axios from "axios";
const URL = "https://randomuser.me/api/?inc=name,email,dob,phone,picture&results=20";


export default {
  getEmployees: function() {
    return axios.get(URL);
  }
};

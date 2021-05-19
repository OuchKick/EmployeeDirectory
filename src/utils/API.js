import axios from "axios";

const URL = "https://randomuser.me/api/?inc=name,email,dob,phone,picture&results=50"

export default {
    getEmployees: function() {
        return axios.get(URL);
    }
}
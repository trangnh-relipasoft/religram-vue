import axios from 'axios';


const auth = axios.create({
    baseURL: "https://khoa123.herokuapp.com" + "/api/v1/auth",
    timeout: 2000,
    // withCredentials: true
});


export default auth
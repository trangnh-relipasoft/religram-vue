import axios from 'axios';
import {HOST} from "../api/apidoc";


const auth = axios.create({
    baseURL: HOST + "/auth",
    timeout: 2000,
    // withCredentials: true
});


export default auth
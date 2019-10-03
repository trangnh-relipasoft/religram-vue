import axios from 'axios';
import {HOST} from "../api/apidoc";

const post_axios = axios.create({
    baseURL: HOST + '/post',
    timeout: 2000,
    // withCredentials: true
});

export default post_axios
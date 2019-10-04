import axios from 'axios';
import {HOST} from "../api/apidoc";


// axios.defaults.headers.common['Authorization'] = store.getState().token;
const post_axios = axios.create({
    baseURL: HOST + '/post',
    timeout: 2000,
    // withCredentials: true
});
post_axios.defaults.headers.common['Authorization'] = 'Bearer '+ window.localStorage.getItem('token');

export default post_axios
import axios from "axios";
import {baseUrl} from './constants/constant';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    
});

export default instance;
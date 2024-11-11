import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5222' });

export default instance;
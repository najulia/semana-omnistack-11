import axios from 'axios';

const api = axios.create({
    baseUrl:'http://meuIp:porta'
});

export default api;
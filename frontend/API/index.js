const  axios  = require("axios");

const API = axios.create({
    baseURL: 'http://localhost:8888',
      });

 API.Login=(data)=>{
    console.log(data)
    return API.post('/api/v1/auth/login', data);
 }
 API.siginUp=(data)=>{
    return API.post('/api/v1/auth/signup', data);
 }
 API.logout=()=>{
    return API.post('/api/v1/auth/logout');
 }
 API.orderItem=(data)=>{
    return API.post('/api/v1/order', data);
 }
 API.orderHistory=()=>{
    return API.get('/api/v1/orderhistory');
 }

 export { API }
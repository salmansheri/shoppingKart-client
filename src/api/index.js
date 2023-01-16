import axios from 'axios'; 

const BASE_URL = "http://localhost:5000"; 
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzNjZTA5ODE3YzBmNTA3YjI2MzhlNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Mzg2OTU1MSwiZXhwIjoxNjc0MTI4NzUxfQ.K9rThKRFQZLUyypUQ_oBrG-84h-zbe1ktEQIoaooBs0";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
}); 

export const userRequest = axios.create({
    baseURL: BASE_URL, 
    header: {token: `Bearer ${token}`}
})
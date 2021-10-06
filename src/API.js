import axios from "axios";

const API_URL = 'http://localhost:3001';

const api = axios.create({
    baseURL: API_URL, 
    timeout: 15000,
    timeoutErrorMessage: "Erro para realizar requisição com o back-end"
})

export default api;
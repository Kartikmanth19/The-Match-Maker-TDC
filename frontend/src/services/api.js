import axios from "axios";

const api = axios.create({
    baseURL: "https://the-match-maker-tdc.onrender.com/api"
});

export default api;

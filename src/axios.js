import axios from "axios";

const instance = axios.create({
    baseURL: "https://internshala-backened-2.onrender.com",
    withCredentials: true,
});

export default instance;

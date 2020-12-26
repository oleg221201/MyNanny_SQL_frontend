import axios from "axios";

export default axios.create({
    //baseURL: "https://mynannysite.herokuapp.com/",
    baseURL: "http://localhost:2020",
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
    }
});
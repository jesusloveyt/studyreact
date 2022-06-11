import axios from "axios";

export default axios.create({
    baseURL : "https://dev-api.hauspital.co.kr/api",
    headers: {
        "Content-type":"application/json"
    }
})
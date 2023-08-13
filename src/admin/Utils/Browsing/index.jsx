import axios from "axios";

const BASE_URL = "http://localhost:5200/api/v1";

const https = axios.create({
    baseURL: BASE_URL,
    responseType: "json",
});

function getHeaders(secure = false) {
    let headers;
    if (secure) {
        headers = {
            "content-Type": "application/json",
            Authorization: localStorage.getItem("accessToken"),
        };
    } else {
        headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
        };
    }
    return headers;
}

function get(url, issecure) {
    return https.get(url, {
        headers: getHeaders(issecure),
    });
}
function post(url, data, isSecure) {
    return https.post(url, data, {
        headers: getHeaders(isSecure),
    });
}
function put(url, data, issecure) {
    return https.put(url, data, {
        headers: getHeaders(issecure),
    });
}
function remove(url, isSecure) {
    return https.delete(url, { headers: getHeaders(isSecure) });
}

export default {
    post,
    get,
    remove,
    put,
};
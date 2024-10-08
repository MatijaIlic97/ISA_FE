import axios from "axios";
import {toast} from "react-toastify";

export const Axios = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 15000000,
    headers:{
        "Content-Type": "application/json"
    }
});

export const AxiosAuth = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 150000000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (url, params) => {
    return await AxiosAuth.get(url, {params});
}

export const post = async (url, params, config) => {
    try {
        return await AxiosAuth.post(url, params, config);
    } catch {
        toast.error("Unsuccessfully!");
    }
}

export const put = async (url, params) => {
    try {
        return await AxiosAuth.put(url, params);
    } catch {
        toast.error("Unsuccessfully updated!");
    }
}

export const del = async (url) => {
    try {
        return await AxiosAuth.delete(url);
    } catch {
        toast.error("Unsuccessfully deleted!");
    }
}
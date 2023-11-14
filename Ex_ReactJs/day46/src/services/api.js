// call api
import {config} from "./config.js";
import axios from "axios";
import queryString from 'query-string';

const {SERVER_API} = config;


// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

const axiosClient = axios.create(
    (() => {

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };


        return {
            baseURL: SERVER_API,
            headers
        }
    })()
);

axiosClient.interceptors.request.use(function (config) {
    try {
        // console.log(apiKey);
        config.headers['X-API-KEY'] = localStorage.getItem('API_Key');
    } catch (e) {
        console.log(e)
    }
    return config;
});

function buildUrl(baseUrl, params) {
    const query = queryString.stringify(params);

    // console.log(url);
    return `${baseUrl}?${query}`;
}

export const apiClient = {
    get: async (url, requestParam = null) => {

        try {
            if (requestParam) {
                url = buildUrl(url, requestParam);
            }
            console.log(url);
            const response = await axiosClient.get(url);
            // console.log(response);
            return response.data;
        } catch (error) {
            // console.log(error)
            throw Error(error.response.data.message);
        }
    },

    post: async (url, body = {}) => {
        try {
            const response = await axiosClient.post(url, body);
            // console.log(response);
            return response.data;
        } catch (error) {
            throw Error(error.response.data.errors);
        }
    },


    patch: async (url, body = {}) => {
        try {
            const response = await axiosClient.patch(url, body);
            return response.data;
        } catch (error) {
            throw Error(error.response.data.errors);
        }
    },


    put: async (url, body = {}) => {
        try {
            const response = await axiosClient.put(url, body);
            return response.data;
        } catch (error) {
            throw Error(error.response.data.errors);
        }
    },

    delete: async (url) => {
        try {
            const response = await axiosClient.delete(url);
            return response.data;
        } catch (error) {
            throw Error(error.response.data.errors);
        }
    }
};
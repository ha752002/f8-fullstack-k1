// call api
import { config } from "./config.js";
const { SERVER_AUTH_API } = config;
import axios from "axios";
import queryString from 'query-string';


// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

const axiosClient = axios.create(
    (() => {

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };


        return {
            baseURL: SERVER_AUTH_API,
            headers
        }
    })()
);

axiosClient.interceptors.request.use(function (config) {
    const apiKey = localStorage.getItem('API_Key');
    console.log(apiKey);
    config.headers['X-API-KEY'] = apiKey;

    return config;
});

function buildUrl(baseUrl, params) {
    const query = queryString.stringify(params);
    const url = `${baseUrl}?${query}`;
    // console.log(url);
    return url;
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
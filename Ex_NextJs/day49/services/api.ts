
import axios from "axios";
import queryString from 'query-string';
import Cookies from "universal-cookie";

// console.log(process.env.NEXT_PUBLIC_API_URL);

const axiosClient = axios.create(
    (() => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        return {
            headers
        }
    })()
);

axiosClient.interceptors.request.use(function (config) {
    const cookies = new Cookies();
    const token = cookies.get('token');
    // console.log(token)
    // console.log(token);
    config.headers['Authorization'] = "Bearer " +  token;
    return config;
});
// ?page=1&limit=2
function buildUrl(baseUrl:string, params :  Record<string, any> ) {
    const query = queryString.stringify(params);
    const url = `${baseUrl}?${query}`;
    // console.log(url);
    return url;
}

export const apiClient = {
    get: async (url : string, requestParam? :Record<string, any> ) => {
        if (requestParam) {
            url = buildUrl(url, requestParam);
        }
        // console.log(url);
        const response = await axiosClient.get(url);
        return response;
    },

    post: async (url : string, body = {}) => {
        const response = await axiosClient.post(url, body);
        // console.log(response);
        // console.log(response.data);
        return response.data;
    },


    patch: async (url : string, body = {}) => {
        const response = await axiosClient.patch(url, body);
        return response.data;
    },


    put: async (url : string, body = {}) => {
        const response = await axiosClient.put(url, body);
        return response.data;
    },

    delete: async (url : string) => {
        const response = await axiosClient.delete(url);
        return response.data;
    }
};
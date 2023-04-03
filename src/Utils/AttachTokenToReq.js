import Cookie from "js-cookie";
import axios from "axios";

// Default config options


    const defaultOptions = {
        baseURL: "https://pf-api-production.up.railway.app/",
    };

    // Create instance
    export let instance = axios.create(defaultOptions);

    // Set the AUTH token for any request
    instance.interceptors.request.use( req => {
        const token = Cookie.get('token');
        req.headers.Authorization = `Bearer ${token}`
        return req;
    });

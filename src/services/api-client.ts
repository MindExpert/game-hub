import axios, { AxiosInstance, AxiosError, CanceledError, AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api', // Replace with your API base URL
    params: {
        key: '5f1162a53020463f8a9bafbe61f93ad8',
    },
    timeout: 5000, // Set a timeout value in milliseconds
    headers: {
        'Content-Type': 'application/json', // Set the content type header
    },
});


class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
    };

    get = (id: number | string) => {
        return axiosInstance
            .get<T>(this.endpoint + '/' + id)
            .then((res) => res.data);
    };
}



export default APIClient;
export { AxiosError, CanceledError };
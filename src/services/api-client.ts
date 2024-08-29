import axios, { AxiosInstance, AxiosError, CanceledError } from 'axios';

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

// Create an instance of Axios with custom configuration
const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api', // Replace with your API base URL
    params: {
        key: '5f1162a53020463f8a9bafbe61f93ad8',
    },
    timeout: 5000, // Set a timeout value in milliseconds
    headers: {
        'Content-Type': 'application/json', // Set the content type header
    },
});

export default apiClient;
export { AxiosError, CanceledError };
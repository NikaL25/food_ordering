import { API_URL } from "@/config/api.config";
import axios from "axios";
import { deleteTokensStorage, getAccessToken } from "../auth/auth.helper";
import { errorCatch } from "./error.api";
import { getNewtokens } from "./helper.auth";

console.log('🔗 Axios Interceptors initialized with baseURL:', API_URL);

const instance = axios.create({
    baseURL: API_URL,
    timeout: 10000, // 10 second timeout
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(async (config) => {
    const accessToken = await getAccessToken()

    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    console.log('📤 Request:', config.method?.toUpperCase(), config.url);

    return config
}, (error) => {
    console.error('❌ Request Interceptor Error:', error.message);
    return Promise.reject(error);
})


instance.interceptors.response.use(
    (response) => {
        console.log('✅ Response:', response.status, response.config.url);
        return response;
    },
    async error => {
        const originalRequest = error.config

        console.log('📊 Response Error:', {
            status: error.response?.status,
            message: error.message,
            url: originalRequest?.url,
            hasResponse: !!error.response
        });

        if(
            error.response &&
            (error.response.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided')  &&
            error.config && 
            !error.config._isRetry  
        ) {
            originalRequest._isRetry = true
            try {
                await getNewtokens()
                return instance.request(originalRequest)
            } catch (error) {
                if (errorCatch(error) === 'jwt expired') 
                    await deleteTokensStorage()
                return Promise.reject(error);
            }
        }
        throw error
    }
)

export default instance
import { Platform } from 'react-native';

export let SERVER_URL = process.env.SERVER_URL;

// Fallback logic if .env is not properly loaded
if (!SERVER_URL) {
    if (Platform.OS === 'android') {
        // Android emulator: use 10.0.2.2 to reach host machine
        SERVER_URL = 'http://10.0.2.2:4200';
        console.warn('⚠️  SERVER_URL not found in .env, using Android emulator default: http://10.0.2.2:4200');
    } else if (Platform.OS === 'ios') {
        // iOS simulator: use localhost
        SERVER_URL = 'http://localhost:4200';
        console.warn('⚠️  SERVER_URL not found in .env, using iOS simulator default: http://localhost:4200');
    } else {
        // Web or fallback
        SERVER_URL = 'http://localhost:4200';
        console.warn('⚠️  SERVER_URL not found in .env, using fallback: http://localhost:4200');
    }
}

console.log('🌐 API Configuration:');
console.log('   Server URL:', SERVER_URL);
console.log('   Platform:', Platform.OS);
console.log('   API Endpoint:', `${SERVER_URL}/api`);

export const API_URL = `${SERVER_URL}/api`;

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getUsersUrl = (string: string) => `/users${string}`;
export const getProductsUrl = (string: string) => `/products${string}`;
export const getCategoriesUrl = (string: string) => `/categories${string}`;
export const getOrdersUrl = (string: string) => `/orders${string}`;
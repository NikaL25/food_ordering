import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  EnumSecureStore,
  EnumAsyncStorage,
  ITokens,
  IAuthResponse,
} from '@/types/auth.interface';

export const getAccessToken = async () => {
  const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN);

  return accessToken || null;
};

export const saveTokensStorage = async (data: ITokens) => {
  await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.accessToken);
  await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.refreshToken);
};

export const deleteTokensStorage = async () => {
  await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN);

  await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN);
};

export const getUserFromStorage = async () => {
  try {
    const userData = await AsyncStorage.getItem(EnumAsyncStorage.USER)
    
    // Return null if no data, not empty object
    if (!userData) {
      return null
    }
    
    return JSON.parse(userData)
  } catch (e) {
    console.error('❌ Error parsing user from storage:', e)
    return null
  }
};

export const saveToStorage = async (data: IAuthResponse) => {
  await saveTokensStorage(data)
  try {
    // Only save user if it exists; otherwise remove it
    if (data.user) {
      await AsyncStorage.setItem(EnumAsyncStorage.USER, JSON.stringify(data.user))
    } else {
      await AsyncStorage.removeItem(EnumAsyncStorage.USER)
      console.warn('⚠️  No user data in response to save')
    }
  } catch (error) {
    console.error('❌ Error saving user to storage:', error)
  }
}
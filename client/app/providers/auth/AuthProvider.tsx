import { View, Text } from 'react-native'
import React, { FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { IContext, TypeUserState } from './auth-provider.interface'

import * as SplashScreen from 'expo-splash-screen'
import { IUser } from '@/types/user.interface'
import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper'


export const AuthContext = createContext({} as IContext)


let ignore = SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    const [user, setUser] = useState<TypeUserState | null>(null)

    useEffect(()=>{
        let isMounted=true

        const checkAccessToken = async () =>{
            try {
                const accessToken = await getAccessToken()

                if(accessToken) {
                    const storedUser = await getUserFromStorage()
                    if(isMounted && storedUser) {
                        setUser(storedUser)
                    }
                }
            } catch (error) {
                console.error('❌ Error checking auth token:', error)
            } finally{
                await SplashScreen.hideAsync()
            }
        }

        let ignore = checkAccessToken()

        return () =>{
            isMounted=false
        }
    }, [])
  return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>)
}

export default AuthProvider
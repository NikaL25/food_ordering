import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from './navigation.type'
import { routes } from './routes'
import { useAuth } from '@/hooks/useAuth'
import Auth from '@/components/screens/auth/Auth'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()


const PrivateNavigator: FC = () => {
  const { user } = useAuth()
  
  // Better auth check: only true if user has an id
  const isAuthenticated = Boolean(user?.id)
  
  return (
      <Stack.Navigator screenOptions={ {
        headerShown: false,
        contentStyle:{
            backgroundColor: "#fff"
        }
      }}>

        { isAuthenticated ? (
          <>
            {routes.filter(route => route.name !== 'Auth').map(route => (
              <Stack.Screen key={route.name}
              {...route} />
            ))}
          </>
        ) : (
          <Stack.Screen 
            name='Auth' 
            component={Auth}
            options={{
              animationEnabled: false
            }}
          />
        )}
      </Stack.Navigator>
  )
}

export default PrivateNavigator
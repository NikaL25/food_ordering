import {FC, useEffect, useState} from 'react'
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native'
import PrivateNavigator from './PrivateNavigator'
import BottomMenu from '@/components/layout/bottom-menu/BottomMenu'
import { useAuth } from '@/hooks/useAuth'
import { useCheckAuth } from '@/providers/auth/useChekAuth'

const Navigation: FC = () => {
  const {user} = useAuth()

  const [currentRoute, setCurrentRoute] = useState<string |undefined>(undefined)

  const navRef = useNavigationContainerRef()
  
  // Determine if user is authenticated (has id)
  const isAuthenticated = Boolean(user?.id)

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name)
    const listener = navRef.addListener('state', () => setCurrentRoute(navRef.getCurrentRoute()?.name))
     return () => {
      navRef.removeListener('state', listener)
    }
  }, [])

  useCheckAuth(currentRoute)
  
  return (
    <>
    <NavigationContainer 
      ref={navRef} 
      key={isAuthenticated ? 'authenticated' : 'unauthenticated'}
    >
      <PrivateNavigator />
    </NavigationContainer>
    {user && currentRoute && (
      <BottomMenu nav={navRef.navigate} currentRoute={currentRoute}/>
    )}
    </>
  )
}

export default Navigation
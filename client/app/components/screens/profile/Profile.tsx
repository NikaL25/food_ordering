import { View, Text, Image, ScrollView} from 'react-native'
import React, { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from './useProfile'
import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'
import { AuthService } from '@/services/auth/auth.service'
import UserOrders from './UserOrders'

const Profile: FC = () => {

  const { setUser, user } = useAuth()
  const { profile, isLoading } = useProfile()

  const handleLogout = async () => {
    try {
      await AuthService.logout()
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <Layout>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}>
        <Heading isCenter>Profile</Heading>

        <View className='my-6 items-center justify-center'>
          {profile && (
            <Image
              source={{ uri: profile?.avatarPath }}
              className='w-40 h-40 rounded-full'
            />
          
          )}
            
        </View>

        {user && <UserOrders />}
      </ScrollView>

      {/* Fixed Logout Button */}
      {user && (
        <View className='absolute bottom-[50px] left-0 right-0 bg-white border-t border-gray-200 px-5 py-4'>
          <Button
            onPress={handleLogout}
            className=''
          >
            Logout
          </Button>
        </View>
      )}
    </Layout>
  )
}

export default Profile
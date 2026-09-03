import { View, Text, Pressable, Image } from 'react-native'
import React, { FC } from 'react'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Banner: FC = () => {
    const { navigate } = useTypedNavigation()
  return (
    <View className='mt-5 w-full bg-[#47AA52] px-5
        py-5 rounded-2xl justify-between flex-row'>
      <View>
        <Text className='font-medium w-56
            text-white text-xl'>
                Fast delivery = delicious  choice every time!
        </Text>

        <Pressable
            onPress={() => navigate('Explorer')}
            className='bg-black py-2 rounded-full
            w-28 mt-4'
            >
            <Text className='text-white font-medium
                text-center'> 
                Order now
            </Text>
        </Pressable>
      </View>

      <View className='absolute bottom-6  right-10 w-28 h-28'>
            <Image 
                source={require('../../../../../assets/images/banner.png')}
                />
      </View>
    </View>
  )
}

export default Banner
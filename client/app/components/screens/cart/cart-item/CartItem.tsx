import { View, Text, Image, Pressable } from 'react-native'
import React, { FC } from 'react'
import { ICartItem } from '@/types/cart.interface'
import { getMediaSource } from '@/utils/getMediaSource'
import { convertPrice } from '@/utils/convertPrice'
import { useActions } from '@/hooks/useActions'
import { Ionicons } from '@expo/vector-icons'

interface ICartItemProps {
  item: ICartItem
}

const CartItem : FC<ICartItemProps> = ({ item }) => {
  const { removeFromCart, changeQuantity } = useActions()

  return (
    <View className='flex-row mb-4 bg-white rounded-lg p-3 border border-gray-100'>
      {/* Image */}
      <View className='mr-3'>
        <Image
          source={getMediaSource(item.product.image)}
          className='w-24 h-24 rounded-lg'
        />
      </View>

      {/* Product Info */}
      <View className='flex-1'>
        <Text className='font-semibold text-base mb-1' numberOfLines={2}>
          {item.product.name}
        </Text>

        <Text className='text-gray-600 text-sm mb-2'>
          {convertPrice(item.price)}
        </Text>

        {/* Quantity Control */}
        <View className='flex-row items-center mt-auto'>
          <Pressable
            onPress={() => changeQuantity({ id: item.id, type: 'minus' })}
            className='bg-gray-200 px-2 py-1 rounded'
          >
            <Text className='text-lg font-bold'>−</Text>
          </Pressable>

          <Text className='mx-3 font-semibold'>{item.quantity}</Text>

          <Pressable
            onPress={() => changeQuantity({ id: item.id, type: 'plus' })}
            className='bg-gray-200 px-2 py-1 rounded'
          >
            <Text className='text-lg font-bold'>+</Text>
          </Pressable>

          {/* Remove Button */}
          <Pressable
            onPress={() => removeFromCart({ id: item.id })}
            className='ml-auto'
          >
            <Ionicons
              name='trash'
              size={20}
              color='#ef4444'
            />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default CartItem
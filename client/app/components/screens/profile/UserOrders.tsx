import { View, Text, ScrollView, Image } from 'react-native'
import React, { FC } from 'react'
import { useUserOrders } from './useUserOrders'
import Loader from '@/components/ui/Loader'
import Heading from '@/components/ui/Heading'
import { convertPrice } from '@/utils/convertPrice'
import { getMediaSource } from '@/utils/getMediaSource'
import { IOrder } from '@/types/order.interface'

const UserOrders: FC = () => {
  const { orders, isLoading, error } = useUserOrders()

  if (isLoading) {
    return (
      <View className='py-8 items-center'>
        <Loader />
      </View>
    )
  }

  if (error) {
    return (
      <View className='py-4'>
        <Text className='text-red-500 text-center'>
          Error loading orders
        </Text>
      </View>
    )
  }

  if (!orders || orders.length === 0) {
    return (
      <View className='py-8'>
        <Text className='text-center text-gray-500 text-lg'>
          You don't have any orders yet.        </Text>
      </View>
    )
  }

  return (
    <View className='mt-6'>
      <Heading>My orders</Heading>
      
      <ScrollView>
        {orders.map((order: IOrder) => (
          <View key={order.id} className='mt-4 bg-white rounded-lg p-4 border border-gray-100 mb-3'>
            {/* Order Header */}
            <View className='flex-row justify-between items-center mb-3'>
              <Text className='font-semibold text-base'>
                Order #{order.id.slice(0, 8)}
              </Text>
              <Text className='text-gray-600 text-sm'>
                {new Date(order.createdAt).toLocaleDateString('ru-RU')}
              </Text>
            </View>

            {/* Order Items */}
            <View className='border-t border-gray-100 pt-3'>
              {order.items.map((item, idx) => (
                <View key={idx} className='flex-row mb-3'>
                  <View className='mr-3'>
                    <Image
                      source={getMediaSource(item.product.image)}
                      className='w-16 h-16 rounded-lg'
                    />
                  </View>
                  
                  <View className='flex-1'>
                    <Text className='font-medium text-sm' numberOfLines={2}>
                      {item.product.name}
                    </Text>
                    <Text className='text-gray-600 text-xs mt-1'>
                      Quantity: {item.quantity}
                    </Text>
                    <Text className='text-green-600 font-semibold text-sm mt-1'>
                      {convertPrice(item.price * item.quantity)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Order Total */}
            <View className='border-t border-gray-100 pt-3 mt-3 flex-row justify-between'>
              <Text className='font-semibold'>Total:</Text>
              <Text className='font-bold text-base text-green-600'>
                {convertPrice(order.total)}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default UserOrders

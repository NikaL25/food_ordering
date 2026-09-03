import { View, Text} from 'react-native'
import React, { FC } from 'react'
import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import { useCart } from '@/hooks/useCart'
import { convertPrice } from '@/utils/convertPrice'
import Button from '@/components/ui/button/Button'
import CartItem from './cart-item/CartItem'
import { useCheckout } from './useCheckout'

const Cart: FC = () => {
  const { items, total } = useCart()
  const { onCheckout } = useCheckout()
  return (
    <>
    <Layout>
        <Heading>Cart</Heading>

        {items.length ? 
          items.map(item => <CartItem key={item.id} item={item}  />) : (
            <Text>Not found</Text>
          )}
    </Layout>

    {items.length ? (
      <View className='bottom-8 absolute w-[90%] mx-5'>
        <Text className='font-bold text-xl'>
          Total: {convertPrice(total)}
        </Text>
        <Button onPress={() => onCheckout()}>Place Order</Button>
      </View>
    ): null}
    </>

  )
}

export default Cart
import React, { FC } from 'react'
import Button from '@/components/ui/button/Button'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'

interface IAddToCartButton {
    product: IProduct
}

const AddtoCartButton : FC<IAddToCartButton> = ({product}) => {
  const { addToCart, removeFromCart } = useActions()

  const { items } = useCart()

  const currentElement = items.find(
    cartItem => cartItem.product.id === product.id
  )

  return (
    <Button className='mt-6'
      onPress={()=>
        currentElement 
           ? removeFromCart({id: currentElement.id})
           : addToCart({
              product,
              quantity: 1, 
              price: product.price
           })
      }
    >
      {currentElement ? 'Remove from cart' : 'Add to cart'}
    </Button>
  )
}

export default AddtoCartButton
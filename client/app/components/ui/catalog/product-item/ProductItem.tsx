import { View, Text, Pressable, Image } from 'react-native'
import React, { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { getMediaSource } from '@/utils/getMediaSource'
import ProductInfo from './ProductInfo'

    interface IProductItem {
      product: IProduct
    }
    
    const ProductItem : FC<IProductItem> = ({product}) => {
      const { navigate } = useTypedNavigation()
      console.log('IMAGE URL:', getMediaSource(product.image))
      return (
        <View className='rounded-lg flex-col mb-3.5 '>
          <Pressable onPress={() => navigate('Product', {
            slug: product.slug
          })}
          className='bg-gray-100 rounded-xl relative overflow-hidden p-5 flex items-center justify-center'
          >
            <Image source={getMediaSource(product.image)}
            width={130}
            height={130} 
            style={{ width: 130, height: 130 }}
            resizeMode="contain"
/> 

          </Pressable>
          <ProductInfo product={product} />
        </View>
      )
    }
    
    export default ProductItem
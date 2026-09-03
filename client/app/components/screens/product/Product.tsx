import { View, Image } from 'react-native'
import React, { FC } from 'react'
import { useProduct } from './useProduct'
import Loader from '@/components/ui/Loader'
import { getMediaSource } from '@/utils/getMediaSource'
import Layout from '@/components/layout/Layout'
import ProductHeader from './ProductHeader'
import ProductInfo from './product-info/ProductInfo'
import AddtoCartButton from './product-info/AddtoCartButton'

const Product: FC = () => {
  const { isLoading, product } = useProduct()

  if(isLoading) return <Loader />
  if(!product) return null

  return (
    <Layout>
      <ProductHeader product={product} />
      <View className='items-center justify-center mt-4'>
        <Image 
          source={getMediaSource(product.image)} 
          width={260}
          height={260}
        />
      </View>
      <ProductInfo  product={product} />
      <AddtoCartButton  product={product} />
    </Layout>
  )
}

export default Product
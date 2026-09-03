 import { View, Text } from 'react-native'
 import React, { FC } from 'react'
import { useProducts } from './useProducts'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'
 
 const Products : FC = () => {
  const {products, isLoading} = useProducts() 
   return isLoading ?(
    <Loader />
   ) : (
     <View>
       <Catalog title='Products' products={products || []} />
     </View>
   )
 }
 
 export default Products
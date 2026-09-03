import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { useCategory } from './useCategory'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/catalog/Catalog'

const Category : FC = () => {
  const { category, products, isLoading } = useCategory()

  if(isLoading) return <Loader />
  return (
    <Layout> 
      { category ? (
      <Catalog
          title={category.name}
          products={products || []}
        />      ): (
        <Text>Category not found</Text>
      ) }
      
    </Layout>
  )
}

export default Category
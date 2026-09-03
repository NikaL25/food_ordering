import { useTypedRoute } from "@/hooks/useTyperRoute"
import { CategoryService } from "@/services/category.service"
import { ProductService } from "@/services/product.service"
import { useQuery } from "@tanstack/react-query"

export const useCategory = () => {
    const { params } = useTypedRoute<'Category'>()

    const { isLoading: isCategoryLoading, data: category } =  useQuery({
        queryKey: ['get category by slug'],
        queryFn: () => CategoryService.getBySlug(params.slug)
    })

    const categoryId = category?.slug || ''


     const { isLoading: isProductLoading, data: products } =  useQuery({
        queryKey: ['get products by category'],
        queryFn: () => ProductService.getByCategory(params.slug),
        enabled: !!categoryId
    })

    return { category, products, isLoading: isCategoryLoading || isProductLoading }

}
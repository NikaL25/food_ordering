import { useQuery } from "@tanstack/react-query"
import { useSearchForm } from "./useSearchForm"
import { ProductService } from "@/services/product.service"

export const useSearch = () => {
   const { searchTerm , debouncedSearch,  control } = useSearchForm()

   const {data: products, isLoading} = useQuery({
        queryKey: ['search product', debouncedSearch],
        queryFn: () => ProductService.getAll(debouncedSearch),
        enabled: !!debouncedSearch
   })

   return { products, isLoading, control, searchTerm }
}
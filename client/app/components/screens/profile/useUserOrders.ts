import { OrderService } from "@/services/order.service"
import { useQuery } from "@tanstack/react-query"
import { IOrder } from "@/types/order.interface"

export const useUserOrders = () => {
    const { data: ordersData, isLoading, error } = useQuery({
        queryKey: ['user-orders'],
        queryFn: () => OrderService.getByUserId(),
        retry: 1,
        staleTime: 5 * 60 * 1000 // Cache for 5 minutes
    })

    // Remove duplicates and ensure unique orders by id
    const orders = ordersData ? Array.from(
        new Map(ordersData.map((order: IOrder) => [order.id, order])).values()
    ) : []

    return { orders, isLoading, error }
}

import { UserService } from "@/services/user.service"
import { useQuery } from "@tanstack/react-query"

export const useProfile = () => {
    const {data: profile, isLoading } = useQuery({
        queryKey: ['get profile'],
        queryFn: () => UserService.getProfile()
    })
    return {profile, isLoading}
}
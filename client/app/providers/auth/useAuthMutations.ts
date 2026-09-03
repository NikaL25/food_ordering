import { useAuth } from "@/hooks/useAuth";
import { AuthService } from "@/services/auth/auth.service";
import { IAuthFormData } from "@/types/auth.interface";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { UseFormReset } from "react-hook-form";

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
    const { setUser } = useAuth()

    const { mutate: loginSync, isPending: isLoginLoading } = useMutation({
        mutationKey: ['login'],
        mutationFn: ({email, password}: IAuthFormData) => AuthService.main('login', email, password),
        onSuccess(data) {
            reset()
            // Only set user if it exists in response
            if (data?.user) {
                setUser(data.user)
                navigate('Home')
            } else {
                console.warn('⚠️  No user data returned from login')
            }
        }
    })


     const { mutate: registerSync, isPending: isRegisterLoading } = useMutation({
        mutationKey: ['register'],
        mutationFn: ({email, password}: IAuthFormData) => AuthService.main('reg', email, password),
        onSuccess(data) {
            reset()
            // Only set user if it exists in response
            if (data?.user) {
                setUser(data.user)
                navigate('Home')
            } else {
                console.warn('⚠️  No user data returned from registration')
            }
        }
    })


    return useMemo(() => ({
        loginSync,
        registerSync,
        isLoading: isLoginLoading || isRegisterLoading
    }), [
        isLoginLoading, isRegisterLoading
    ])
}
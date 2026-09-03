export const errorCatch = (error: any): string => {
    const message = error?.response?.data?.message

    if (message) {
        return typeof message === 'object' ? message[0] : message
    }

    if (error?.message) {
        return error.message
    }

    return 'An unexpected error occurred'
}
export const convertPrice = (price?: number) => {
    if (price === null || price === undefined) return '$0.00';
    return price.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
    })
}
import { SERVER_URL } from '@/config/api.config'

export const getMediaSource = (path: string) => {
    if (!path) {
        return undefined
    }

    // внешняя ссылка
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return {
            uri: path
        }
    }

    // локальный файл
    return {
        uri: `${SERVER_URL}${path}`
    }
}
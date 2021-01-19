import { useCallback } from 'react'

export const useHttp = () => {
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            const res = await fetch(url, { method, body, headers })
            const data = await res.json()
            return data
        } catch (e) { console.log(e.message) }
    }, [])
    return { request }
}
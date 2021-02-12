//@ts-check
import { hideLoader, showAlert, showLoader } from "../generalAcsion"

export function httpFetch(url, method = null, body = null, file = null, token = null, type = null) {
    return async dispach => {
        try {

            if (method === 'GET') {
                dispach(showLoader())
                const requestOptions = { method: method, headers: { token } }
                const response = await fetch(url, requestOptions)
                const data = await response.json()
                type && dispach({ type: type, payload: data })
                dispach(showAlert(data.message))
                dispach(hideLoader())
            }
            if (method === 'POST') {
                const requestOptions = {
                    method: method,
                    headers: { 'Content-Type': 'application/json', token },
                    body: JSON.stringify(body)
                }
                dispach(showLoader())
                const response = await fetch(url, requestOptions)
                const data = await response.json()
                type && dispach({ type: type, payload: data })
                dispach(showAlert(data.message))
                dispach(hideLoader())
            }
            if (method === 'DELETE') {
                const requestOptions = { method: method, headers: { token } }
                dispach(showLoader())
                const response = await fetch(url, requestOptions)
                const data = await response.json()
                type && dispach({ type: type, payload: data })
                dispach(showAlert(data.message))
                dispach(hideLoader())
            }

            if (file) {
                const requestOptions = {
                    method: 'POST',
                    headers: { token },
                    body: file
                }
                dispach(showLoader())
                const response = await fetch(url, requestOptions)
                const data = await response.json()
                type && dispach({ type: type, payload: data })
                dispach(showAlert(data.message))
                dispach(hideLoader())

            }
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}
//@ts-check
import { hideLoader, showAlert, showLoader } from "../generalAcsion"

export function httpFetch(url, method = null, body = null, file = null, token = null, type = null) {
    return async dispach => {
        try {

            if (method === 'GET' || method === 'DELETE') {
                dispach(showLoader())
                const requestOptions = { method: method, headers: {"Authorization": token} }
                const response = await fetch(url, requestOptions)
                const data = await response.json()
                type && dispach({ type: type, payload: data })
                dispach(showAlert(data.message))
                dispach(hideLoader())
            }
            if (method === 'POST') {
                const requestOptions = {
                    method: method,
                    headers: {'Content-Type': 'application/json',
                    "Authorization": token},
                    body: JSON.stringify(body)
                }
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
                    headers:  {"Authorization": token},
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

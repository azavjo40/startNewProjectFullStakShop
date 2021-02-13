//@ts-check
import { hideLoader, showAlert, showLoader } from "../generalAcsion"

export function httpFetch(url, method = null, body = null, file = null, token = null, type = null) {
    return async dispach => {
        try {
            dispach(showLoader())

            const requestOptions = { 
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": token
                } 
            }
         
            if (method === 'POST') {
                requestOptions.body = JSON.stringify(body)
            }
            
            if (file) {
                requestOptions.body = file
            }

            const response = await fetch(url, requestOptions)
            const data = await response.json()

            if(type) { 
                dispach({ type: type, payload: data })
            }
            dispach(showAlert(data.message))
            dispach(hideLoader())

        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}

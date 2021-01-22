import { hideLoader, showAlert, showLoader } from "./authAcsions"


export function CreateAcsion(form, file) {
    return async dispach => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            formData.append(form)
            const requestOptions = {
                method: 'POST',
                headers: {
                    "Authorization": 'lfkja'
                },
                body: formData
            }
            dispach(showLoader())
            const data = await fetch('/api/create', requestOptions)
            const json = await data.json()
            dispach(showAlert(json.message))
            dispach(hideLoader())
        } catch (e) { console.log(e) }
    }
}
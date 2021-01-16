import {IS_LOADING_FALSE, IS_LOADING_TRUE, POST_REGISTER } from "./types";

export function showLoader(){
return{
type: IS_LOADING_TRUE
}
}
export function hideLoader(){
return{
type: IS_LOADING_FALSE
}
}

export function authRegister(raw){
return async dispach =>{
try{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
const requestOptions = {
method: 'POST',
headers:myHeaders,
body: JSON.stringify(raw),
redirect: 'follow'
}
dispach(showLoader())
const date = await fetch("/api/auth/register", requestOptions)
const json = await date.json()
dispach({type:POST_REGISTER, payload: json})
dispach(hideLoader())
}catch(e){console.log(e)}
}
}
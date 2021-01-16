import {HIDE_ALERT, IS_LOADING_FALSE, IS_LOADING_TRUE,  POST_LOGIN_ID,  POST_LOGIN_TOKEN,  POST_REGISTER, SHOW_ALERT } from "./types";

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

export function hideAlert(){
return{
type: HIDE_ALERT
}
}

export function showAlert(text){
return dispach=>{
dispach({
type: SHOW_ALERT, payload: text
})
setTimeout(()=>{
dispach(hideAlert())
},3000)
}
}

export function authRegister(raw){
return async dispach =>{
try{
const myHeaders = new Headers()
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
dispach(showAlert(json.message))
dispach({type: POST_LOGIN_TOKEN, payload: json.token})
dispach({type: POST_LOGIN_ID, payload: json.userId})
dispach(hideLoader())
}catch(e){dispach(showAlert('Error something went wrong to Rgister'))}
}
}

export function  authLogin(raw){
return async dispach=>{
try{
const stiregeName = 'userDate'
const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
const requestOptions = {
method: 'POST',
headers:myHeaders,
body: JSON.stringify(raw),
redirect: 'follow'
}
dispach(showLoader())
const date = await fetch('/api/auth/login',requestOptions)
const json = await date.json()
localStorage.setItem(stiregeName, 
JSON.stringify({token: json.token, userId: json.userId}))
dispach(showAlert(json.message))
dispach(hideLoader())
}catch(e){dispach(showAlert('Error something went wrong to Login'))}
}
}
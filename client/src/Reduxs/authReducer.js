import {SHOW_ALERT, HIDE_ALERT, POST_LOGIN_TOKEN, POST_REGISTER, IS_LOADING_FALSE, IS_LOADING_TRUE, POST_LOGIN_ID} from "./types"
const initialState = {
register: [],
token: '',
userId: '',
isloading: false,
alert: null
}
export const beskatReducer = (state = initialState, actoin)=>{
switch(actoin.type){
case POST_REGISTER:
return {...state, register: state.register.concat(actoin.payload)}
case POST_LOGIN_TOKEN:
return {...state, token: state.token.concat(actoin.payload)}
case POST_LOGIN_ID:
return {...state, userId: state.userId.concat(actoin.payload)}
case IS_LOADING_FALSE: 
return {...state, isloading: false}
case IS_LOADING_TRUE: 
return {...state, isloading: true}
case SHOW_ALERT: 
return {...state, alert: actoin.payload}
case HIDE_ALERT:
return {...state, alert: null}
default: return state
}
}
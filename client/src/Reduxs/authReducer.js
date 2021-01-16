import { POST_LOGIN, POST_REGISTER, IS_LOADING_FALSE, IS_LOADING_TRUE} from "./types"
const initialState = {
register: [],
login: [],
isloading: null
}
export const beskatReducer = (state = initialState, actoin)=>{
switch(actoin.type){
case POST_REGISTER:
return {...state, register: state.register.concat(actoin.payload)}
case POST_LOGIN:
return {...state, login: state.login.concat(actoin.payload)}
case IS_LOADING_FALSE: 
return {...state, isloading: false}
case IS_LOADING_TRUE: 
return {...state, isloading: true}
default: return state
}
}
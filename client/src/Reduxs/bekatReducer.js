import { CREATE_BESKAT } from "./types"

const initialState = {
prod: []
}
export const beskatReducer = (state = initialState, actoin)=>{
switch(actoin.type){
case CREATE_BESKAT: 
return {...state, prod: state.prod.concat(actoin.payload)}
default: return state
}
}
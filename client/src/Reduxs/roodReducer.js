import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { generalReducer } from './generalReducer'
import { menuReducer } from './menuReducer'


export const roodReducer = combineReducers({
    // тут будить хранилешь 
    auth: authReducer
    , menu: menuReducer
    , general: generalReducer
})
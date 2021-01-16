import {combineReducers} from 'redux'
import { beskatReducer } from './authReducer'


export const roodReducer = combineReducers({
    // тут будить хранилешь 
    auth: beskatReducer
})
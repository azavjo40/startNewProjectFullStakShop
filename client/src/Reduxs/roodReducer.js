import {combineReducers} from 'redux'
import { beskatReducer } from './bekatReducer'


export const roodReducer = combineReducers({
    // тут будить хранилешь 
    beskat: beskatReducer
})
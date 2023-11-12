import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import genresReducer from './genresReducer'

const rootReducer = combineReducers({ 
    events: eventsReducer,
    genres: genresReducer
})

export default rootReducer
import * as type from '../types'

const initialState = {
    eventsList: {},
    filteredEventsList: {},
    currentEvent: {},
    searchTerm: ''
}

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SET_EVENTS_FROM_API:
            return {
                ...state,
                eventsList: action.payload
            }
        case type.SET_FILTERED_EVENTS_LIST:
            return {
                ...state,
                filteredEventsList: action.payload
            }
        case type.SET_CURRENT_EVENT:
            return {
                ...state,
                currentEvent: action.payload
            }
        case type.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default eventsReducer
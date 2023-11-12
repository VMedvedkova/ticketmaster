import * as type from '../types'

export function setData(payload: object[]) {
    return {
        type: type.SET_EVENTS_FROM_API,
        payload
    }
}
export function setCurrentEvent(payload: object[]) {
    return {
        type: type.SET_CURRENT_EVENT,
        payload
    }
}
export function setSearchTerm(payload: string) {
    return {
        type: type.SET_SEARCH_TERM,
        payload
    }
}
export function setModalState(payload: object[]) {
    return {
        type: type.SET_MODAL_STATE,
        payload
    }
}
export function setFilteredEventsList(payload: object[]) {
    return {
        type: type.SET_FILTERED_EVENTS_LIST,
        payload
    }
}
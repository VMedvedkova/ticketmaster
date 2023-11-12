import * as type from '../types'

export function setGenres(payload: object[]) {
    return {
        type: type.SET_GENRES,
        payload
    }
}
export function setFilter(payload: object[]) {
    return {
        type: type.SET_FILTER,
        payload
    }
}
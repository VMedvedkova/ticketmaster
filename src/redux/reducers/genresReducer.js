import * as type from '../types'

const initialState = {
    genresList: {},
    genresFilter: '',
    genresFilterName: ''
}

export const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SET_GENRES:
            return {
                ...state,
                genresList: action.payload
            }
        case type.SET_FILTER:
            return {
                ...state,
                genresFilter: action.payload.id,
                genresFilterName: action.payload.name
            }
        default:
            return {
                ...state
            }
    }
}

export default genresReducer
import { FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, SEARCH_COUNTRIES, ASCENDENTE, POST_ACTIVITIES, GET_ACTIVITIES } from '../04_const/Const'

const initialState = {
    countries: [],
    allCountries: [],
    activities: []
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }

        case FILTER_BY_CONTINENT:
            const filtredCountries = state.allCountries
            const continentFiltered = action.payload === 'All' ? filtredCountries : filtredCountries.filter(el => el.continent === action.payload)
            return {
                ...state,
                countries: continentFiltered
            }
        case POST_ACTIVITIES:
            return {
                ...state
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }

        case ORDER_BY_NAME:
            let orderedCountries = action.payload === ASCENDENTE ? state.countries.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            }) :
                state.countries.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })

            return {
                ...state,
                countries: orderedCountries
            }

        default:
            return state;
    }
}

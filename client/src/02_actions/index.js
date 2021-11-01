import axios from 'axios';
import{FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, SEARCH_COUNTRIES, GET_ACTIVITIES, POST_ACTIVITIES } from '../04_const/Const'


export function getCountries() {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/countries')
            return dispatch({
                type: GET_COUNTRIES,
                payload: json.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function searchCountries(search) {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/countries?name=' + search)
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: json.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterCountriesByContinent (payload){
    console.log(payload) 
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function orderByName (payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function getActivities(){
    return async function (dispatch){
        let json = await axios.get('http://localhost:3001/activity');
        return dispatch ({
            type: GET_ACTIVITIES,
            payload: json.data
        })
    }
}

export function postActivities(payload){
    return async function (dispatch){
        let json = await axios.post('http://localhost:3001/activity', payload);
        return dispatch({
            type: POST_ACTIVITIES,
            payload: json
        })
    }
}



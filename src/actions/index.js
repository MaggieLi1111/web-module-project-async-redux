import axios from "axios";

export const GET_START = "GET_START";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAIL ="GET_FAIL";

export const getPokemon = () => {
    return dispatch => {
        dispatch({ type:GET_START})
        axios
        .get("https://pokeapi.co/api/v2/pokemon/")
        .then( res => {
            console.log(res.data.results);
            dispatch({type:GET_SUCCESS, payload:res.data.results})
            
        })
        .catch(err => {dispatch({type:GET_FAIL,payload:err.error})})
    }
}

export const getPokemonStart = () => {
    return({type:GET_START})
}

export const getPokemonSuccess = (pokemon) => {
    return({type:GET_SUCCESS, payload:pokemon})
}

export const getPokemonFail = (err) => {
    return ({type:GET_FAIL, payload:err})
}
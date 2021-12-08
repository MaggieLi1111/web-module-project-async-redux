import axios from "axios";

export const GET_START = "GET_START";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAIL ="GET_FAIL";

export const getDogFacts = () => {
    return dispatch => {
        dispatch({ type:GET_START})
        axios
        .get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=50")
        .then( res => {
            console.log(res);
            dispatch({type:GET_SUCCESS, payload:res.data})
            
        })
        .catch(err => {dispatch({type:GET_FAIL,payload:err.error})})
    }
}

export const getDogFactsStart = () => {
    return({type:GET_START})
}

export const getDogFactsSuccess = (facts) => {
    return({type:GET_SUCCESS, payload:facts})
}

export const getDogFactsFail = (err) => {
    return ({type:GET_FAIL, payload:err})
}
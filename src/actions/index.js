import axios from "axios";

export const GET_START = "GET_START";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAIL ="GET_FAIL";

export const getGifs = ( searchTerm ) => {
    return ( dispatch ) => {
        dispatch(getStart());
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=eF68i1SpJhoVnYQRTDKYcXdtpZlGeJDP&q=${searchTerm}`)
        .then(res => {
            dispatch(getSuccess(res.data.data));
        })
        .catch(error => {
            dispatch(getFailure(error.message))
        })
    }
}


export const getStart = () => {
    return({type:GET_START})
}

export const getSuccess = (gifs) => {
    return({type:GET_SUCCESS, payload:gifs})
}

export const getFailure = (err) => {
    return ({type:GET_FAIL, payload:err})
}
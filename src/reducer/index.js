import { GET_FAIL, GET_SUCCESS,GET_START } from "../actions";

export const initialState = {
    facts:"",
    isGetting:false,
    error:null
}

const reducer = ( state= initialState, action ) => {
    switch(action.type){
        case(GET_START):
        return ({
            ...state,
            isGetting:true
        })
        case(GET_SUCCESS):
        return({
            ...state,
            isGetting:false,
            facts:action.payload
        })
        case(GET_FAIL):
        return({
            ...state,
            isGetting:false,
            error:action.payload
        })
        default:
            return state
    }
}

export default reducer
import { GET_FAIL, GET_SUCCESS,GET_START } from "../actions";

 const initialState = {
    pokemon:[],
    isGetting:false,
    error:null
}

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case(GET_START):
        return ({
            ...state,
            isGetting:true
        })
        case(GET_SUCCESS):
        return({
            ...state,
            pokemon:action.payload,
            isGetting:false,
            facts:null
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
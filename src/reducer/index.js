import { GET_FAIL, GET_SUCCESS, GET_START} from "../actions"

const initialState = {
    gifs: [],
    isLoading: false,
    error: "" 
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (GET_START):
            return ({
                ...state,
                isLoading: true,
                error:""
            })
        case (GET_SUCCESS):
            return ({
                ...state,
                gifs:action.payload,
                isLoading:false,
                error:""
            })
        case (GET_FAIL):
            return ({
                ...state,
                isGetting: false,
                error: action.payload
            })
        default:
            return state
    }
}

export default reducer;
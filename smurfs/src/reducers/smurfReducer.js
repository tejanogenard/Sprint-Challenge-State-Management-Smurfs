import { GET_DATA, UPDATE_SMURFS } from "../actions/actionIndex"

export const initalState = {
    smurfs: {},
    isFetchingData: false,
    error: " "
}
 


 export const smurfReducer = (state = initalState, action ) => {
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                isFetchingData: true,
                smurfs: []
            }
            case UPDATE_SMURFS:
                return{
                    ...state,
                    smurfs: action.payload
                }
            default: 
                return state
    }
 }
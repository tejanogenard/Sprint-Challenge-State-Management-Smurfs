import { GET_DATA } from "../actions/actionIndex"

export const initalState = {
    smurfs: [],
    isFetchingData: false,
    error: " "
}
 


 export const smurfReducer = (state = initalState, action ) => {
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                isFetchingData: true
            }
            default: 
                return state
    }
 }
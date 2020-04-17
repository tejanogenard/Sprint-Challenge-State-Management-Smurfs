import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, POST_SMURF_START, POST_SMURF_SUCCESS,POST_SMURF_FAIL } from "../actions/actionIndex"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_START:
            return{
                ...state,
                isFetching:true
            }
        case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case FETCH_SMURF_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case POST_SMURF_START:
            return{
                ...state,
                isFetching: true
            }
        case POST_SMURF_SUCCESS: 
            return{
                ...state,
          smurfs: [...state.smurfs, action.payload],
          isFetching: false
            }
        case POST_SMURF_FAIL:
            return{
                ...state,
                error: action.payload
            }
            default:
                return state
           }     
        }   
      

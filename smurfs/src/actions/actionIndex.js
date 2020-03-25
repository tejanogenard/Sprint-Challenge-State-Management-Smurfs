import axios from 'axios'

export const GET_DATA = "GET_DATA"
export const UPDATE_SMURFS = "UPDATE_SMURFS"


export const getData = () => dispatch =>{
dispatch({type: GET_DATA})
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        console.log(res)
        dispatch({type: UPDATE_SMURFS, payload: res.data})
    })
    .catch(err => console.log('error fetching data from api. err:', err))


    // reference the TK information on other types of actions that I need 
}
import axios from 'axios'

export const GET_DATA = "GET_DATA"

export const getData = () => dispatch =>{
dispatch({type: GET_DATA})
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => 
        console.log(res))
    .catch(err => console.log('error fetching data from api. err:', err))
}
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getSmurfData, postSmurfData } from '../actions/actionIndex'

const SmurfForm = props => {
const [smurfs, setSmurfs] = useState(
    {
    name: "",
    age: '',
    height: "",
    id: Date.now()
    }
)

const handleData =e => {
    e.preventDefault()
    props.getSmurfData()
}

const handlePostData = e => {
    e.preventDefault()
    props.postSmurfData(smurfs)
}

const handleChange = e => {
    setSmurfs({...smurfs, [e.target.name]: e.target.value})
}

    return(
     <>
     {props.isFetching ? (
         <div>we are fetching</div>
     ): ( 
     <button onClick ={handleData}> GET SMURFED </button>)
     }
       <div>
        <form>
            <input 
                type = "text"
                placeholder = "name"   
                name = "name"  
                value ={smurfs.name}  
                onChange={ e => handleChange(e)}      
            />
             <input 
                type = "number"
                placeholder = "age"     
                name = "age"
                value = {smurfs.age}     
                onChange={ e => handleChange(e)}         
            />
             <input 
                type = "number"
                placeholder = "height"    
                name ="height"  
                value = {smurfs.height}  
                onChange={ e => handleChange(e)}           
            />
             <input 
                type = "number"
                placeholder = "id"         
                name = 'id'    
                value = {smurfs.id}
                onChange={ e => handleChange(e)}      
            />
           <button onClick ={handlePostData}>Create your own smurf</button>
        </form>
        </div>
     </>
    )
}

const mapStateToProps = state => {
    return{
        isFetching: state.isFetching
    }
}

export default connect(
    mapStateToProps,
    { getSmurfData, postSmurfData }
  )(SmurfForm);
  
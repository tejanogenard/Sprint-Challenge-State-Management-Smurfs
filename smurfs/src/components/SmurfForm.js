import React from 'react'
import { connect } from 'react-redux'
import { getSmurfData, postSmurfData } from '../actions/actionIndex'



const SmurfForm = props => {

   const state = {
        newSmurfs: [
            {
              name: '',
              age: Number,
              height: Number,
              id: Date.now()
            }
          ]
    }


const handleData =e => {
    e.preventDefault()
    props.getSmurfData()
}

const handlePostData = e => {
    e.preventDefault()
    props.postSmurfData()
}



    return(
     <>
     {props.isFetching ? (
         <div>we are fetching</div>
     ): ( 
     <button onClick ={handleData}> GET SMURFED </button>)
     }
       {/* add post request here to add a new smurf*/}
       <div>
        <form>
            <input 
                type = "text"
                placeholder = "name"     
                value ={state.newSmurfs.name}  
                      
            />
             <input 
                type = "number"
                placeholder = "age"     
                value = {state.newSmurfs.age}        
            />
             <input 
                type = "number"
                placeholder = "height"      
                value = {state.newSmurfs.height}       
            />
             <input 
                type = "number"
                placeholder = "id"             
                value = {state.newSmurfs.id}
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
  
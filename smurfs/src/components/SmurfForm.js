import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/actionIndex'

const SmurfForm = props => {



const handleGetData = e =>{
    e.preventDefault()
    props.getData()
} 


    return(
        <>
        {props.isFetchingData ?(
            <div>Is fetching the data</div>
        ) : (
         <button onClick = {handleGetData}> get data </button>
        )}
       
        </>
    )
}

const mapStateToProps = state => {
    return{
    isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,{ getData }
)(SmurfForm)
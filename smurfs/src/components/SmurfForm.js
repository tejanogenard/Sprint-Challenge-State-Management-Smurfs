import React from 'react'
import { connect } from 'react-redux'

const SmurfForm = props => {
    return(
        <>
        {props.isFetchingData ?(
            <div>Is fetching the data</div>
        ) : (
         <button> get data </button>
        )}
         <p> writing from smurfForm </p>
        </>
    )
}

const mapStateToProps = state => {
    return{
    isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,{}
)(SmurfForm)
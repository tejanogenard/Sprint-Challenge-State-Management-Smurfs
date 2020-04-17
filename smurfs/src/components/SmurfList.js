import React from 'react'
import { connect } from "react-redux"

const SmurfList = props => {
    console.log(props)
    return(
        <>
            {props.smurfs.map(smurf => (
            <div>{smurf.name}</div>)
            )}
        </>
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs
    }
}


export default connect(
    mapStateToProps,
    { }
)(SmurfList)
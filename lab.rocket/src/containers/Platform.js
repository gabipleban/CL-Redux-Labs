import React from "react";
import {connect } from 'react-redux'
import {deploy, start} from '../redux/actions'
import Platform from "../components/Platform";

const mapDispatchToProps= (dispatch) => {
    return{
        deploy: ()=> dispatch(deploy()),
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        launched: state.launched,
        counter: state.counter
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Platform)
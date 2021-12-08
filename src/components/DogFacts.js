import React, { useEffect} from "react";
import { getDogFacts } from "../actions/index";
import { connect } from "react-redux";




const DogFacts = (props) => {
    const { facts, isGetting, error} = props;

    useEffect( () => {
        props.getDogFacts()
    },[])

    if(error){
        return <h2>Oppps, not able to fetch data..</h2>
    }

    if(isGetting) {
        return <h2>Holding on!...</h2>
    }

    const handleClick = () => {
        props.getDogFacts()
    }

    return (
        <>
        <div>
            <h2>{facts}</h2>
        </div>
        <button onClick={handleClick}>More facts</button>
        </>
    )

}

const mapStateToProps = state => {
    return {
        facts:state.facts,
        error:state.error,
        isGetting:state.isGetting
    }
}


export default connect(mapStateToProps, {getDogFacts})(DogFacts)

import React from "react";
import { getPokemon } from "../actions/index";
import { connect } from "react-redux";




const Pokemon = (props) => {
    const { pokemon, isGetting, error} = props;



    if(error){
        return <h2>Oppps, not able to fetch data..</h2>
    }

    if(isGetting) {
        return <h2>Holding on!...</h2>
    }

    const handleClick = () => {
        props.getPokemon()
    }

    return (
        <>
        <button onClick={handleClick}>More Pokemon</button>
        <div>{pokemon.map((item,index) => {
                return (
                    <div className="name" key={index}>{item.name} <br/> {item.url}</div>
                )
            })}
        </div>
        </>
    )

}

const mapStateToProps = state => {
    return {
        pokemon:state.pokemon,
        error:state.error,
        isGetting:state.isGetting
    }
}


export default connect(mapStateToProps, {getPokemon})(Pokemon)

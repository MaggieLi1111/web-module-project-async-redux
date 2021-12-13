import React from "react";
import Gif from "./gif";
import { connect } from "react-redux";


const GifList = (props) => {
    const { gifs } = props;

    return (
        <div id="gifList"> 
            {gifs.map((gif,index) => {
                return (<Gif key={index} gif={gif} />)
            })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        gifs: state.gifs
    }
}

export default connect(mapStateToProps)(GifList)

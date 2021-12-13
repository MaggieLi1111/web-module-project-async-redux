import React, { useState} from "react";
import { connect } from "react-redux";
import { getGifs } from "./../actions";


const GifForm = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        props.getGifs(e.target.value)
        setSearchTerm(e.target.value)
    
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.getGifs(searchTerm);       
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
            <button>Search</button>
        </form>
    )
}

export default connect(null, { getGifs })(GifForm);
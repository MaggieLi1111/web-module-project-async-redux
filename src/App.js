import React, { useEffect } from 'react';
import GifList from "./components/GifList";
import GifForm from "./components/GifForm";
import { connect } from "react-redux"; 
import { getGifs } from "./actions"

import './App.css';


function App(props) {
  
  const { loading, error, getGifs } = props;
  console.log("props:", props);

  useEffect (() => {
    getGifs();    
  },[]) 


  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm />
      {(error !== "") && <h3>{error}</h3>}
      {loading ? <h3>Loading...</h3> : <GifList />}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    loading:state.loading,
    error:state.error
  }
}
export default connect(mapStateToProps,{ getGifs } )(App);
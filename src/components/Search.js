import { useState } from "react";
import React from "react";
import PokemonCard from "./PokemonCard";

function Search({setSearch}) {
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e)=>{setSearch(e.target.value)}} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

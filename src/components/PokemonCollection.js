import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({song}) {
  
  const pokemonArray =
    song.map((data)=>{
      console.log(data.artists[0]
        )
      return <PokemonCard 
       name ={data.name}
       image={data.images[0].url}
       artist={data.artists[0].name}
       artists={data.artists[1  ].name}
      
      />
    })
  
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonArray}
    </Card.Group>
      
  );
}

export default PokemonCollection;

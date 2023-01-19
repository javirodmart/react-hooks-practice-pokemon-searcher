import React,{useEffect,useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [song,setSong] = useState([])
  const [search,setSearch] = useState("")
  // const searchArray = pokemon.filter((poke)=>{
  //   return   poke.name.toLowerCase().includes(search.toLowerCase())
  // })
  useEffect(()=>{
     fetch(`https://api.spotify.com/v1/browse/new-releases?limit=50`, {
    method:'GET',
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Authorization": "Bearer BQBWuH11JZ4L9dE3nJU7uL18s2C2wV4NMCdqj9uBZeMQt0gHYRlYhSfyLBXLemfjEzo2Yay0_ELEjqy4X5fsTpmB_2YKyF5ssNmOBFOxkm_46Lf_6oavRUr32xXQjIlfxv_bP7L39ym_l8Yy_YynBLNcnvXkKcWj2CA0-qEk0VANmlhJ_gsrwkAU6FCavXBOiY8"
    }
})
    .then(r => r.json())
    .then(data => {       
        setSong(data.albums.items)
        
    })

  })
   
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search  />
      <br />
      <PokemonCollection song={song} />
    </Container>
  );
}

export default PokemonPage;

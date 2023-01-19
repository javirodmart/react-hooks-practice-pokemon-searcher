import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id,name,hp,front,back,sprites,image,artist,artists}) {
  const [sprite,setSprite] = useState(false)
  const handelClick = ()=>{
      setSprite(!sprite)
      
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img  src={image} alt="oh no!" /> 
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {artist}
            {artists}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

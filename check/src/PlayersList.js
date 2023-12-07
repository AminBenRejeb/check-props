import React from "react";
import Player from './Player';
import Players from './Players';

const PlayersList = () => {
  return (
    <div>
      {Players.map((joueur, index) => (
        <Player joueur={joueur} key={index}/>
      ))}
    </div>
  );
};

export default PlayersList;

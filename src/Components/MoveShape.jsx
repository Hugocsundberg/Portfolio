import React, { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';


const MoveShape = () => {
    return (
        <div className="absolute w-screen top-36">
           <div className="move-shape animate-moveAround absolute right-36 md:right-72 bg-fuchsia-500 w-72 h-80"></div>
           <div className="move-shape animate-moveAroundReverse absolute right-36 md:right-60 rounded-full bg-blue-500 w-44 h-44"></div> 
        </div>
    );
}

export default MoveShape;

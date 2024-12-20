import React, { useEffect, useState } from 'react'
import "../../index.css";
import {motion} from 'framer-motion'

const Cursor = () => {
    const main =document.querySelector("#main")
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
      });
     
    
      useEffect(() => {
        const mouseMove = (e) => {
          setMousePosition({
            x:e.x,
            y:e.y
          })
    
    
        };
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          main.removeEventListener("mousemove", mouseMove);
        };
      }, []);
      const variants ={
        default:{
          x:mousePosition.x,
          y:mousePosition.y
        }
      }
  return (
    <>
           <div id="main">
        <h1></h1>
        <motion.div id="cursor"
        variants={variants}
        animate ="default"
        />
         </div>
      

    </>
  )
}

export default Cursor

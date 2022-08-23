import React from 'react'

const Knight = ({xpos, ypos}) => {
   let xpos = xpos + 1
   let ypos = ypos + 1

   const handleClick = () => {
      console.log('xpos', xpos, 'ypos', ypos)
   }
   return (
      <p onClick={handleClick}> Knight </p>
   )
}

export default Knight;
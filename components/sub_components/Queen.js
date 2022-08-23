import React , {useState} from 'react'

const Queen = ({xpos, ypos}) => {
   const[queenMoves, setQueenMoves] = useState([xpos + 1, ypos + 1])

   console.log('queenMoves',queenMoves)

   //                       ********** X - AXIS *****************
   // 1.
   // create the boundaries 
   // this array shows all my possible xMovements [ 1 ... 8]
   const bound = Array.from({length: 8} , (_,i) => i +1)
   // console.log('xBound',xBound)

   // 2.
   // I want to check where I am on the board
   // if I am on x = 3 
   // then I can move to rows [ 1, 2, 4, 5, 6, 7, 8]
   // if you're on 3, it's going to return the same array without where you are
   const checkXMoves = () => {
      if (bound.includes(xpos)) {
         // return a new array without that specified number
         return bound.filter(e => e !== xpos)
      }
   }

   console.log('checkXMoves' , checkXMoves())

   //                **************** Y - AXIS ******************

   // do same as #2 for 
   const checkYMoves = () => {
      if (bound.includes(ypos)) {
         return bound.filter(e => e !== ypos)
      }
   }

      console.log('checkYMoves' , checkYMoves())


   //          ************** COMBINING X AND Y AXIS *********************

   //  I want to create a new array that has all 

   


   const handleClick = () => {
      console.log(xpos, ypos)
   }

   return (
      <p onClick={handleClick}>{xpos} x {ypos}</p>
   )
}

export default Queen;
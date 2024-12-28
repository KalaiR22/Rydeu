import React from 'react'
import { socails } from '../constants'

const Social = () => {
  return (
   <div className="flex  items-center justify-center gap-10 mt-5">
         {socails.map((ch) => (
           <div
             key={ch.id}
             className=" flex-col items-center justify-center p-2  hover:bg-[#EDFAFA]  rounded-[6px]"
           >
             <img
               src={ch.image}
               alt=""
               className="h-fit w-fit flex items-center justify-center mx-auto"
             />
             
           </div>
         ))}
       </div>
  )
}

export default Social

import React from 'react'
import { chats } from '../constants'

const Chat = () => {
  return (
    <div className="flex  items-center justify-center gap-14 mt-5">
      {chats.map((ch) => (
        <div
          key={ch.tit}
          className=" flex-col items-center justify-center py-2 w-[86px] h-[86px] hover:bg-[#EDFAFA] hover:border-[#DEF6F5] hover:border rounded-[6px]"
        >
          <img
            src={ch.image}
            alt=""
            className="h-fit w-fit flex items-center justify-center mx-auto"
          />
          <p className="font-montserrat text-[11px] text-black font-medium leading-[13.41px] text-center  decoration-skip-ink-none">
            {ch.tit}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Chat

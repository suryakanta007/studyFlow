import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

const EmptyState = () => {

    const {setToggle} = useContext(SessionContext);
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center text-center">
      
      
      <div className="text-5xl mb-4">📚</div>

      
      <h2 className="text-white text-xl font-semibold mb-2">
        No Study Sessions Yet
      </h2>

      
      <p className="text-gray-400 text-sm max-w-sm mb-6">
        Start by creating your first study session to stay organized and boost your productivity.
      </p>

      <button onClick={()=>{setToggle(true)}} className="px-5 py-2.5 rounded-xl bg-orange-400 text-[#0b1e2d] font-semibold 
      hover:bg-orange-300 transition duration-200 shadow-md hover:shadow-orange-400/30">
        + Create Session
      </button>

    </div>
  );
};

export default EmptyState;
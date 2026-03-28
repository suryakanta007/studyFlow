import React, { useContext, useEffect } from "react";
import SessionCard from "./SessionCard";
import { SessionContext } from "../context/SessionContext";
import EmptyState from "./EmptyState";

const SessionList = () => {
  const {sessions,setSessions} = useContext(SessionContext);

  
  return (
    
    <div className="w-full  min-h-screen bg-[#071824] px-6 py-8">

      <div className="max-w-7xl h-screen mx-auto border border-white/10 rounded-2xl p-6 bg-[#0b1e2d]/80 backdrop-blur-md shadow-lg">
        
        <h2 className="text-white text-xl font-semibold mb-6 tracking-wide">
          Your Study Sessions
        </h2>

        {
          sessions.length === 0 ? <EmptyState/> :
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {
           sessions.map((item)=>{
            return <SessionCard key={item.id} data={item}/>
           })
          }
        </div>
        }

       
        
      </div>
    </div>
  );
};

export default SessionList;
import React, { useContext } from 'react'
import { SessionContext } from '../context/SessionContext';

const SessionCard = ({data}) => {
  console.log(data);
  const {deleteSession} = useContext(SessionContext);

  const priorityStyles = {
    Low: "bg-green-500/10 text-green-400 border-green-400",
    Medium: "bg-orange-700/10 text-orange-400 border-orange-700",
    High: "bg-red-500/10 text-red-400 border-red-400",
  };
  
  return (
    <div
              
              className={`${priorityStyles[data.priority]}rounded-2xl p-5 
              hover:shadow-lg hover:shadow-orange-400/10 transition duration-300`}
            >
              
        
              <h3 className=" font-semibold text-lg mb-2">
                {data.topic}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {data.subject}
              </p>

              
              <div className="flex justify-between text-xs text-gray-400 mb-4">
                <span className="px-3 py-1 bg-white/5 rounded-lg">
                  ⏱ {data.duration}min
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-lg">
                  ⚡ {data.priority}
                </span>
              </div>

              <div className="text-sm text-gray-400 mb-4">
                📅 {data.date}
              </div>

              <button className="w-full py-2 rounded-xl border border-red-400 text-red-400 
              hover:bg-red-400 hover:text-white transition duration-200 text-sm"
              onClick={()=>{deleteSession(data.id)}}
              >
                Delete
              </button>

            </div>
  )
}

export default SessionCard
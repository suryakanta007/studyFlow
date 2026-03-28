import { createContext,  useEffect,  useState } from "react";


export const SessionContext = createContext();

export const SessionContextProvider = ({children})=>{

    const [toggle,setToggle] = useState(false);
    const [sessions,setSessions] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("sessions"));
        if (stored) {
          setSessions(stored);
        }
      }, []);

    useEffect(() => {
        localStorage.setItem("sessions", JSON.stringify(sessions));
      }, [sessions]);


    const addSession = (data)=>{
        const formData = {id:Math.floor(Math.random()*1000),...data}
        setSessions((prev)=>[formData,...prev]);
        localStorage.setItem("sessions",JSON.stringify(sessions))
        console.log("Ok");
        
        setToggle(false);

    }

    const deleteSession = (id)=>{
        console.log(id);

        setSessions((prev)=>sessions.filter((item)=>item.id!==id))
        localStorage.setItem("sessions",JSON.stringify(sessions));
    }


    return <SessionContext.Provider value={{toggle,setToggle,sessions,setSessions,addSession,deleteSession}}>{children}</SessionContext.Provider>
}
import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import { SessionContext } from "../context/SessionContext";


const SessionForm = () => {

  console.log("Form rerender...");

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { addSession, setToggle } = useContext(SessionContext);


  return (
    <div className="w-full min-h-screen bg-[#071824] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-lg bg-[#0b1e2d]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">

        <h2 className="text-white text-xl font-semibold mb-6 text-center">
          Create Study Session
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit((data) => {
          console.log("HIII");

          console.log(data);
          addSession(data);



        })}>

          {/* Topic */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Topic Name</label>
            <input
              type="text"
              {...register("topic", { required: "Topic is Required." })}
              placeholder="e.g. React Hooks"
              className="w-full px-4 py-2 rounded-xl bg-[#071824] border border-white/10 text-white 
              focus:outline-none focus:border-orange-400"
            />
            {
              errors.topic && <span className="text-red-500 text-sm p-1">{errors.topic.message}</span>
            }
          </div>

          {/* Subject */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Subject</label>
            <select
              className="w-full px-4 py-2 rounded-xl bg-[#071824] border border-white/10 text-white 
              focus:outline-none focus:border-orange-400"
              {...register("subject")}
            >
              <option>DSA</option>
              <option>Web Dev</option>
              <option>DBMS</option>
              <option>OS</option>
              <option>System Design</option>
            </select>
          </div>

          {/* Duration + Priority */}
          <div className="grid grid-cols-2 gap-4">

            {/* Duration */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Duration (min)</label>
              <input
                type="number"
                placeholder="Max 10"
                className="w-full px-4 py-2 rounded-xl bg-[#071824] border border-white/10 text-white 
                focus:outline-none focus:border-orange-400"
                {...register("duration", { min: { value: 10, message: "Duration should be 10min minmum." }, required: "Duration is required." })}
              />
              {
                errors.duration && <span className="text-red-500 text-sm p-1">{errors.duration.message}</span>
              }
            </div>

            {/* Priority */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Priority</label>
              <select
                className="w-full px-4 py-2 rounded-xl bg-[#071824] border border-white/10 text-white 
                focus:outline-none focus:border-orange-400"
                {...register("priority")}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-xl bg-[#071824] border border-white/10 text-white 
              focus:outline-none focus:border-orange-400"
              {...register("date",{ required: "Date is required." })}
            />

            {
              errors.date && <span className="text-red-500 text-sm p-1">{errors.date.message}</span>
            }

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-400 text-[#0b1e2d] font-semibold 
            hover:bg-orange-300 transition duration-200 shadow-md hover:shadow-orange-400/30"
          >
            Create Session
          </button>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-400 text-[#0b1e2d] font-semibold 
            hover:bg-orange-300 transition duration-200 shadow-md hover:shadow-orange-400/30"
            onClick={() => setToggle(false)}
          >
            Cancle
          </button>
        </form>

      </div>
    </div>
  );
};

export default SessionForm;
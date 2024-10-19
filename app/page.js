"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    // Point2: yha pr jo preventhandler lgaya hjai na ye form ko submit hokr reload hone se rok lega
    e.preventDefault();
    // console.log(title)
    // console.log(desc)
    // Point 4:Niche diya code likhne se  ... se main Task ka purab aur nya sb add ho jaega sath me
    setMainTask([...mainTask, { title, desc }]);
    // point3: preventDefault krne se jo form nii reload ho rha tha na vo ab to vhi pr sb likha dikh rha add task krne ke baad bhi screen pr bhi aur console pr bhi ab agr ise htana hai to niche vala kaam kro
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1) /*splice array me se vha jo index diya hoga vha se comma ke baad jitni value di hogi utni array me se nikaal kleta hai delete nhi krta usko storte kr skte kisi nye var me */
    setMainTask(copyTask)

  }
  let renderTask = (
    <h2>No Task Available</h2>
  ); /*let isliye liya qki change krni hai jb koi task add ho jaye*/
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      {
        /*map fuction array pr lgta hai isse ek nya array mil hata hai aur array ko manipulate kr skte i index bta rha hai */
      }
      return (
        <li
          key={i}
          /*key hr ek element ko ek unique identification deta hai jisse ki react unko differntiate kr pata hai*/ className="flex items-center justify-between mb-5"
        >
          <div className="flex justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <p className="text-lg font-medium">{t.desc}</p>
          </div>
          <button 
          onClick={()=>
            {deleteHandler(i) /* yha pr direct delete handler on click ke andr agr call krte to direct chlne lgta isliye hmne ek function bnaya*/
            }}
          className="bg-red-400 text-white px-4 py-2 rounded font-bold cursor-pointer">
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <div>
      <div className="heading bg-zinc-800 text-white p-5 text-center text-3xl font-semibold">
        TODO LIST
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-zinc-800 text-xl border-4 my-8 mx-16  px-4 py-1"
          placeholder="Enter Title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        >
          {/* Point1: two way binding: tile:value likhhne se tile ki value aani chahye isliye type krne [pr user ko nii dikhega pr jb hm settitle kr denge aur usme element (e){element se pura object dikhega} ke andr target krke uski bvalue lene pr jo hm likh rhe honge vo dikhne lgega. Assan bhasha me hm two way binding tb ktrte haio jb hme react aur user dono ko btana hai ki kya kaam ho rha hai ] */}
        </input>
        <input
          type="text"
          className="border-zinc-800 text-xl border-4 my-8 mx-16  px-4 py-1"
          placeholder="Enter  Description here"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        ></input>
        <button className="bg-zinc-950 rounded-md text-white px-3 text-xl py-2">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default page;

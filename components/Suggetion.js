import React, { useEffect, useState } from 'react'
import faker from "faker"

function Suggetion() {
    const [suggetion,setSuggestion] = useState([]);
    useEffect(()=>
    {
    const suggestions = [...Array(5)].map((_,i)=> (
        {
       ...faker.helpers.contextualCard(),
       id:i,
    })); 
     setSuggestion(suggestions)
    },[])
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold">suggestions</h3>
            <button className="text-gray-600 font-semibold">See all</button>
            </div>
        {suggetion.map(ele=>(
            <div key={ele.id} className="flex items-center justify-between mt-3">
             <img  className="h-10 w-10 rounded-full p-[2px]" src={ele.avatar}/>
             <div className="flex-1 ml-4">
                 <h2 className="text-sm font-semibold">{ele.username}</h2>
                 <h3 className="text-xs text-gray-400">Works at {ele.company.name}</h3>
            </div>
            <button className="text-blue-400 font-bold text-xs">Follow</button>
            </div>
        ))}
        </div>
    )
}

export default Suggetion

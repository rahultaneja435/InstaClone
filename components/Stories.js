import React, { useEffect, useState } from 'react';
import faker from 'faker';
import Story from './Story';

function Stories() {
    const [suggetions,setSuggestions] = useState([]);
    useEffect(()=>
    {
    const fakeSuggetions = [...Array(20)].map((_,i)=>
    ({
        ...faker.helpers.contextualCard(),
        id : i
    })
    )
    setSuggestions(fakeSuggetions);
    },[]);
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
         {suggetions.map(profile=>(
             <Story key={profile.id} image={profile.avatar} username={profile.username}/>
         ))}
        </div>
    )
}

export default Stories

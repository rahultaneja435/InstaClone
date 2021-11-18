import React from 'react'

function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="w-16 h-16 border rounded-full p-[2px]" src="https://www.btvbharat.in/wp-content/uploads/2021/11/shahrukh-khan-scaled.jpg"
            alt=""
            />
        <div className="flex-1 mx-4">
            <h2 className="font-bold">welcome</h2>
            <h3 className="text-sm text-gray-400">dddd</h3>
        </div>
            <button className="text-blue-400 text-sm font-semibold">signOut</button>
        </div>
    )
}

export default MiniProfile

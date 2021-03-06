import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Top() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div className="relative hidden w-24 lg-inline-grid cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-10 w-10 lg-hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className=" relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black"
            type="text"
            placeholder="search"
          ></input>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navbtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navbtn">
          <PaperAirplaneIcon className="navbtn rotate-45" />
          <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center
          animate-pulse">3</div>
          </div>
          <PlusCircleIcon className="navbtn"/>
          <UserGroupIcon className="navbtn"/>
          <HeartIcon className="navbtn"/>
          <img
          src="https://www.btvbharat.in/wp-content/uploads/2021/11/shahrukh-khan-scaled.jpg"
          alt="profile pic"
          className="h-7 rounded-full cursor-pointer object-contain border" />
        </div>
      </div>
    </div>
  );
}

export default Top;

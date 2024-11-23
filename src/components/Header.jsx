"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import '../app/globals.css'
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { SlCamrecorder } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";

const Header = ({ sideBarOpen, setSideBarOpen }) => {
  const [placeholder, setPlaceholder] = useState("검색");
  const [menuState, setMenuState] = useState(true);
  //const [sideBarOpen, setSideBarOpen] = useState(false);
  const router = useRouter();

  const clickMenuBar = () => {
    setSideBarOpen(!sideBarOpen);
    console.log(sideBarOpen);
  }

  return (
    // 컨테이너
    <div className="w-3xl h-20 flex flex-row justify-center items-center bg-slate-500">
      <div className="w-1/6 h-full flex flex-row items-center bg-black">
        <div
          onClick={() => setMenuState(!menuState)}
          className="w-1/4 h-full flex items-center justify-center">
          <IoMdMenu 
            onClick={clickMenuBar}
            className="text-2xl text-white cursor-pointer"/>
        </div>
        <h1
          onClick={() => router.push('/')}
          className="w-3/4 text-4xl text-lime-500 cursor-pointer"
        >Lime</h1>
      </div>
      <div className="w-4/6 h-full flex flex-row items-center justify-center bg-black">
        <div className="w-2/5 h-1/2 bg-black flex items-center justify-around rounded-full border border-white">
          <FaSearch className="text-2xl text-white"/>
          <input
            className="w-10/12 h-4/5 bg-black text-white outline-none"
            type="search"
            placeholder={placeholder}
            onFocus={() => setPlaceholder("")}
            onBlur={() => setPlaceholder("검색")}
          />
        </div>
      </div>
      <div className="w-1/6 h-full flex items-center justify-around bg-black">
        <BsBellFill className="text-2xl text-white cursor-pointer"/>
        <SlCamrecorder className="text-3xl text-white cursor-pointer"/>
        <span className="text-white cursor-pointer"
          onClick={() => router.push('/signin')}
        >로그인</span>
        <CiMenuKebab className="text-white text-2xl"/>
        <span className="text-white cursor-pointer"
          onClick={() => router.push('/signup')}
        >회원가입</span>
      </div>
    </div>
  );
};

export default Header;
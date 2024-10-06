'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FaApple } from "react-icons/fa";

const SignIn = () => {

  const router = useRouter();

  return (

    <div className="w-full h-dvh flex items-center justify-center">
      <div className="w-1/4 h-3/4">
        <div className="w-full h-1/2 flex flex-col items-center justify-center ">
          <div className="w-full h-1/4 flex flex-col items-center justify-around ">
            <span className="flex items-center text-3xl text-lime-500">LIME</span>
            <span className="flex items-center text-xl">로그인 후 이용하실 수 있습니다.</span>
          </div>
          <div className="w-full h-2/4 flex flex-col items-center justify-around ">
            <input 
              type="text" 
              className="w-5/6 h-1/4 pl-2 rounded-md border"
              placeholder="아이디"
            />
            <input 
              type="text" 
              className="w-5/6 h-1/4 pl-2 rounded-md border"
              placeholder="비밀번호"
            />
            <button 
              className="w-5/6 h-1/4 text-white text-xl rounded-md bg-lime-500"
            >로그인
            </button>
          </div>
          <div className="w-full h-1/4 flex flex-col items-center justify-center">
            <div className="w-5/6 h-1/2 flex items-center justify-around text-slate-400">
              <div className="flex items-center">
                <input 
                  type="checkbox"
                />로그인 상태 유지
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  className=""
                />아이디 저장
              </div>
            </div>
            <div className="w-5/6 h-1/2 flex items-center justify-around text-slate-300 px-8">
              <span className="">아이디 찾기</span>
              |
              <span>비밀번호 찾기</span>
              |
              <span 
                onClick={() => router.push('/signup')}
                style={{cursor: "pointer"}}
              >회원가입</span>
            </div>
          </div>
        </div>
        <div className="w-full h-1/4 flex flex-col items-center justify-around">
          <button 
            className="w-5/6 h-1/4 flex items-center justify-around px-32 text-black text-md rounded-md bg-kakao"
            ><RiKakaoTalkFill fontSize={25}/>카카오로 로그인
          </button>
          <button 
            className="w-5/6 h-1/4 flex items-center justify-around px-32 text-white text-md rounded-md bg-Naver"
            ><SiNaver fontSize={18}/>네이버로 로그인
          </button>
          <button 
            className="w-5/6 h-1/4 flex items-center justify-around px-32 text-white text-md rounded-md bg-black"
            ><FaApple fontSize={25}/>애플로 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
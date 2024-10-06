'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FaApple } from "react-icons/fa";

const SignUp = () => {

  const router = useRouter();

  return (
    <div className="w-full h-dvh flex items-center justify-center border">
      <div className="w-1/4 h-1/2 flex flex-col items-center justify-around border">
        <span className="text-3xl text-lime-500">LIME</span>
        회원가입 후 이용하실 수 있습니다
          <button 
            className="w-5/6 h-1/7 flex items-center justify-around px-32 text-white text-xl rounded-md bg-lime-400"
            onClick={() => router.push('/join')}
            >회원가입
          </button>
          <button 
            className="w-5/6 h-1/7 flex items-center justify-around px-32 text-black text-md rounded-md bg-kakao"
            ><RiKakaoTalkFill fontSize={25}/>카카오로 로그인
          </button>
          <button 
            className="w-5/6 h-1/7 flex items-center justify-around px-32 text-white text-md rounded-md bg-Naver"
            ><SiNaver fontSize={18}/>네이버로 로그인
          </button>
          <button 
            className="w-5/6 h-1/7 flex items-center justify-around px-32 text-white text-md rounded-md bg-black"
            ><FaApple fontSize={25}/>애플로 로그인
          </button>
      </div>
    </div>
  );
};

export default SignUp;
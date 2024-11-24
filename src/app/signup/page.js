'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import axios from "axios";
import profileImage from "@/app/assets/images/LimeCharacter.png";

const SignUp = () => {
  const router = useRouter();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profile, setProfile] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8001/signup", {
        username: username,
        email: email,
        password: pw,
        full_name: name,
        bio: bio,
        profile_picture: "https://example.com/"
      });
      router.push('/signin'); // 회원가입 성공 후 리다이렉트
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        <div className="text-center">
          <span 
            onClick={() => router.push("/")}
            className="text-3xl font-bold text-lime-500 cursor-pointer">LIME</span>
          <p className="mt-2 text-gray-600">회원가입 후 이용하실 수 있습니다</p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="사용자명"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPW(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="textr"  // HTML에는 'gender' type이 없습니다
            placeholder="성별"
            value={bio}   // name 대신 별도의 state가 필요합니다
            onChange={(e) => setBio(e.target.value)}  // bio 대신 gender state를 업데이트해야 합니다
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <button
            type="submit"
            onClick={handleSignUp}
            className="w-full py-2 bg-lime-500 text-white rounded-md hover:bg-lime-600 transition-colors"
          >
            회원가입
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">또는</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            className="w-full py-2 px-4 flex items-center justify-center space-x-2 rounded-md bg-[#FEE500] hover:bg-[#FDD800] text-black"
            onClick={() => console.log('카카오 로그인')}
          >
            <RiKakaoTalkFill className="text-2xl" />
            <span>카카오로 로그인</span>
          </button>

          <button
            className="w-full py-2 px-4 flex items-center justify-center space-x-2 rounded-md bg-[#03C75A] hover:bg-[#02B150] text-white"
            onClick={() => console.log('네이버 로그인')}
          >
            <SiNaver className="text-lg" />
            <span>네이버로 로그인</span>
          </button>

          <button
            className="w-full py-2 px-4 flex items-center justify-center space-x-2 rounded-md bg-black hover:bg-gray-800 text-white"
            onClick={() => console.log('애플 로그인')}
          >
            <FaApple className="text-2xl" />
            <span>애플로 로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
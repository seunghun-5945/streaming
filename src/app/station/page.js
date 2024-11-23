import React from "react";
import Image from 'next/image';
import { CiEdit } from "react-icons/ci";
import { FaVideo, FaStar, FaEye } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import Header from "@/components/Header";
import bannerImg from "@/app/assets/images/banner.png";
import profileImg from "@/app/assets/images/LimeCharacter.png";
import background from "@/app/assets/images/LimeBackground.png";

const SidebarButton = ({ icon: Icon, text }) => (
  <button className="w-3/4 h-12 flex items-center gap-3 text-white hover:bg-gray-700 rounded-lg px-4 transition-colors">
    {Icon && <Icon className="text-xl" />}
    <span className="text-lg">{text}</span>
  </button>
);

const StatButton = ({ icon: Icon, count, className }) => (
  <button className={`h-12 flex items-center justify-center bg-white rounded-lg px-4 hover:bg-gray-100 transition-colors ${className}`}>
    <Icon className="text-xl mr-2" />
    <span className="text-lg">{count}</span>
  </button>
);

const VideoThumbnail = ({ className }) => (
  <div className={`relative ${className}`}>
    <iframe 
      className="w-full h-full rounded-lg"
      src="https://www.youtube.com/embed/3K3MMtoG8rY?mute=1&autoplay=1&showinfo=0&rel=0&controls=0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    />
  </div>
);

const Station = () => {
  const sidebarLinks = [
    "전체 VOD", "다시보기", "하이라이트", "업로드 VOD", 
    "업로드 클립", "유저 VOD", "유저 클립", "별풍선 클립", 
    "재생목록", "Catch"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="flex px-8 py-6 gap-8 max-w-8xl mx-auto">
        {/* Sidebar */}
        <div className="w-80Í flex flex-col">
          {/* Profile Section */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src={profileImg}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                />
              </div>
              <h2 className="text-white text-2xl font-semibold mb-2">
                박준수(jackpot1234)
              </h2>
              <p className="text-gray-300 text-center mb-6">
                열심히 코딩하고싶은 백엔드 프로그래머 박준수입니다
              </p>
              <button className="w-full h-12 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <CiEdit className="text-2xl" />
                <span>글쓰기</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-800 rounded-2xl p-4">
            <h3 className="text-white text-xl font-semibold mb-4 px-4">VOD</h3>
            <div className="flex flex-col gap-2">
              {sidebarLinks.map((link) => (
                <SidebarButton key={link} text={link} />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Banner Section */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden mb-8">
            <div className="relative w-full h-80">
              <Image
                src={bannerImg}
                alt="Banner"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
            <div className="p-6 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h1 className="text-white text-3xl font-bold">BJ박준수</h1>
                  <IoIosInformationCircle className="text-white text-2xl" />
                </div>
                <p className="text-gray-300">광소,스폰 문의: 010-1234-5678</p>
              </div>
              <div className="flex gap-4">
                <StatButton icon={FaStar} count="54.9만" className="w-32" />
                <StatButton icon={FaEye} count="99" className="w-24" />
                <StatButton icon={AiFillLike} count="10" className="w-20" />
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <div className="w-full flex flex-col items-center justify-center gap-3 mb-6 py-6 text-white">
              <p className="text-4xl">박준수님의 채널에 오신 것을 환영합니다!</p>
              <Image
                src={background}
              />
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <FaVideo className="text-white text-2xl" />
              <h2 className="text-white text-2xl font-semibold">VOD</h2>
            </div>
            <div className="flex gap-6">
              <VideoThumbnail className="w-2/3 aspect-video" />
              <div className="w-1/3 flex flex-col gap-6">
                <VideoThumbnail className="aspect-video" />
                <VideoThumbnail className="aspect-video" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Station;
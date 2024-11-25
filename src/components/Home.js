'use client'

import React, { useRef, useEffect, useState } from "react";
import { BiVideoRecording } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GiPlainCircle } from "react-icons/gi";
import { BsFire } from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import suggest from "@/json/suggest.json";
import background from "@/app/assets/images/LimeBackground.png";

const TagButton = ({ tag }) => {
  return (
    <div className="min-w-20 max-w-40 h-1/2 flex items-center justify-center bg-slate-700 rounded-2xl ml-5 p-2 text-white text-xl">
      <span className="text-sm">{tag}</span>
    </div>
  );
};

const Scene = ({ img, index, onClick }) => {
  return (
    <img 
      className="w-1/4 h-3/4 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300" 
      src={img}
      onClick={() => onClick(index)}
    />
  );
};

const Category = ({ name, img, index, show }) => {
  return (
    <div className="w-52 h-80 flex flex-col ml-5 flex-shrink-0">
      <div className="w-full h-72 rounded-md overflow-hidden relative group">
        <div className="absolute top-2 left-2 w-8 h-8 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-2xl">{index + 1}</span>
        </div>
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      
      <div className="mt-2 flex flex-col">
        <span className="text-white text-lg font-medium truncate">{name}</span>
        <span className="text-white flex flex-row items-center text-sm font-medium truncate">
          <CgMediaLive color="red" size={10}/>
          LIVE
          <span className="ml-3">{show}명 시청중</span>
        </span>
      </div>
    </div>
  );
};

export const categoryList = [
  {
    name: "Just Chatting",
    img: "/assets/justchatting.jpg",
    show: "2300",
  },
  {
    name: "league of legend",
    img: "/assets/leagueoflegend.png",
    show: "1204"
  },
  {
    name: "valorant",
    img: "/assets/valorant.jpg",
    show: "748"
  },
  {
    name: "battle ground",
    img: "/assets/battleground.jpeg",
    show: "662"
  },
  {
    name: "among us",
    img: "/assets/amongus.png.jpg",
    show: "662"
  },
  {
    name: "goose goose duck",
    img: "/assets/goosegooseduck.jpg",
    show: "662"
  },
  {
    name: "final fantasy",
    img: "/assets/finalfantasy.png",
    show: "662"
  },
  {
    name: "guilty gear",
    img: "/assets/guiltygear.png",
    show: "662"
  },
  {
    name: "tekken 8",
    img: "/assets/tekken8.png",
    show: "662"
  },
  {
    name: "Just Chatting",
    img: "/assets/battleground.jpeg",
    show: "662"
  },
];

const Home = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const isMouseOverRef = useRef(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSuggest = suggest[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        // suggest.length - 1 이 최대 인덱스
        return prevIndex >= suggest.length - 1 ? 0 : prevIndex + 1;
      });
    }, 10000); 

    // cleanup function
    return () => clearInterval(interval);
  }, []);
  
  const handlePrevArrow = () => {
    setCurrentIndex(prevIndex => {
      // 첫 번째 아이템에서 이전을 누르면 마지막 아이템으로
      if (prevIndex === 0) {
        return suggest.length - 1;
      }
      // 그 외에는 이전 인덱스로
      return prevIndex - 1;
    });
  };

  const handleNextArrow = () => {
    setCurrentIndex(prevIndex => {
      // 마지막 아이템에서 다음을 누르면 첫 번째 아이템으로
      if (prevIndex >= suggest.length - 1) {
        return 0;
      }
      // 그 외에는 다음 인덱스로
      return prevIndex + 1;
    });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer || isMouseOverRef.current) {
        animationRef.current = requestAnimationFrame(scroll);
        return;
      }

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      if (scrollPositionRef.current >= maxScroll - 10) {
        scrollPositionRef.current = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollPositionRef.current += 0.5;
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    const handleScroll = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
      }
      scrollPositionRef.current = scrollContainer.scrollLeft;
    };

    const handleMouseEnter = () => {
      isMouseOverRef.current = true;
    };

    const handleMouseLeave = () => {
      isMouseOverRef.current = false;
    };

    let touchStartX = 0;
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      isMouseOverRef.current = true;
    };

    const handleTouchEnd = () => {
      isMouseOverRef.current = false;
      scrollPositionRef.current = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (e) => {
      const touchCurrentX = e.touches[0].clientX;
      const diff = touchStartX - touchCurrentX;
      scrollContainer.scrollLeft += diff;
      touchStartX = touchCurrentX;
    };

    scrollContainer.addEventListener('wheel', handleScroll, { passive: false });
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);
    scrollContainer.addEventListener('touchmove', handleTouchMove);

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleScroll);
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('touchstart', handleTouchStart);
        scrollContainer.removeEventListener('touchend', handleTouchEnd);
        scrollContainer.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <div className="w-full flex-col h-full">
      <div className="w-full h-1/2 flex flex-row bg-black">
      {/* 동영상 옆에 추천영상 박스 */}
      <div className="w-1/2 h-full bg-black shadow-2xl overflow-hidden relativ">
      <div className="w-full h-3/6 flex flex-col p-6 space-y-4 ">
        {/* 프로필 */}
        <div className="w-full flex items-center space-x-4 borer">
          <div className="relative">
            <img 
              src={currentSuggest.icon}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-gray-700 object-cover hover:border-lime-500 transition-all duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">✓</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <h2 className="text-white text-2xl font-bold hover:text-lime-500 transition-colors duration-300">
              {currentSuggest.name}
            </h2>
            <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
              <CgMediaLive className="text-lime-500 text-xl" color="red"/>
              <span className="text-lg pl-2 text-lime-500 font-medium">Live 100명</span>
            </div>
          </div>
        </div>

        {/* 동영사 옆 프로필 설명 */}
        <p className="text-lg text-gray-300 font-medium pl-2 hover:text-white transition-colors duration-300">
          {currentSuggest.content}
        </p>

        {/* Tags */}
        <div className="flex items-center space-x-2">
        <img 
          className="h-14" 
          src={currentSuggest.appIcon || background}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = background;
          }} 
        />
          <span className="text-white text-xl font-medium pl-2">{currentSuggest.app}</span>
          <div className="flex space-x-2">
          {currentSuggest.tag.map((tag, index) => (
            <TagButton 
              key={index} 
              tag={tag} 
            />
          ))}
          </div>
        </div>
    </div>

    <div className="w-full h-2/6 flex flex-row items-center justify-around">
      {suggest.map((item, index) => (
        <Scene 
          key={index}
          img={item.thumbnail}
          index={index}
          onClick={(index) => setCurrentIndex(index)}
        />
      ))}
    </div>

    {/* 동영상 옆 추천방송 이동 화살표 */}
    <div className="w-full h-1/6 flex items-center justify-center space-x-8">
      <button 
        className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
        onClick={handlePrevArrow}
      >
        <IoIosArrowBack className="text-white text-2xl"/>
      </button>
      <div className="flex space-x-4">
        {suggest.map((_, index) => (
          <GiPlainCircle 
            key={index}
            className={`text-sm ${currentIndex === index ? 'text-lime-500' : 'text-gray-600'}`} 
          />
        ))}
      </div>
      <button 
        className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
        onClick={handleNextArrow}
      >
        <IoIosArrowForward className="text-white text-2xl" />
      </button>
    </div>
    </div>
        <div className="w-1/2 h-full">
        <iframe 
          width="100%" 
          height="100%" 
          src={`${currentSuggest.video_url}?mute=1&autoplay=1&showinfo=0&rel=0&controls=0&enablejsapi=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="YouTube video player"
          frameBorder="0"
        />
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-col">
        <div className="w-full h-1/6 flex items-center bg-black">
          <span className="text-2xl flex flex-row items-center justify-between px-6 text-white"><BsFire color="red"/>실시간 인기 카테고리</span>
        </div>
        <div className="w-full h-5/6 bg-black">
          <div 
            ref={scrollRef}
            className="w-full h-full flex flex-row flex-nowrap overflow-x-auto scroll-smooth hide-scrollbar"
          >
            {categoryList.map((item, index, show) => (
              <Category 
                key={index}
                name={item.name}
                img={item.img}
                index={index}
                show={item.show}
              />
            ))}
            {categoryList.map((item, index) => (
              <Category 
                key={`duplicate-${index}`}
                name={item.name}
                img={item.img}
                index={index}
                show={item.show}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-1/3 flex flex-col">
        <div className="w-full h-1/6 flex items-center bg-black">
          <span className="text-2xl flex flex-row items-center justify-between px-6 text-white"><CiStar color="yellow" className="text-4xl"/>이번주 인기 스트리머</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
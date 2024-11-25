"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import axios from "axios";

const SettingCast = () => {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [contents, setContents] = useState('');

  useEffect(() => {
    const extoken = localStorage.getItem('token');
    if (!extoken) {
      router.push('/signin');
      return;
    }
    console.log("토큰 확인:", extoken);
    setToken(extoken);
  }, [router]);

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8001/add_stream_key',
        {
          streamKey: "string",
          tags: [tags],
          title: title,
          contents: contents,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 헤더에 인증 토큰 추가
          },
        }
      );
      console.log("응답 데이터:", response.data);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  

  return (
    <>
    <Header />
    <div className="w-full min-h-screen flex flex-col bg-black text-white p-4">
      <div className="w-1/2 mx-auto my-auto">
        <h1 className="w-full flex justify-center text-3xl font-bold mb-8">스트리밍 설정</h1>
        
        <form className="space-y-6">
          {/* 방송 제목 */}
          <div className="flex flex-col space-y-2">
            <label className="text-lg">방송 제목</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="방송 제목을 입력해주시요"
              className="w-full p-3 bg-zinc-800 rounded-lg border border-zinc-700 
            focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          {/* 카테고리 */}
          <div className="space-y-2">
            <label className="text-lg">카테고리</label>
              <select
                name="category"
                onChange={(e) => setTags(e.target.value)}
                className="w-fulselectl p-3 bg-zinc-800 rounded-lg border border-zinc-700 
                          focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              >
              <option value="">게임 선택</option>
              <option value="zelda">The Legend of Zelda: Breath of the Wild</option>
              <option value="darksouls">Dark Souls</option>
              <option value="cod">Call of Duty</option>
              <option value="fortnite">Fortnite</option>
              <option value="minecraft">Minecraft</option>
              <option value="lol">League of Legends</option>
              <option value="wow">World of Warcraft</option>
              <option value="amongus">Among Us</option>
              <option value="stardew">Stardew Valley</option>
              <option value="hollowknight">Hollow Knight</option>
              <option value="animalcrossing">Animal Crossing: New Horizons</option>
              <option value="sims">The Sims 4</option>
              <option value="gta">Grand Theft Auto V</option>
              <option value="eldenring">Elden Ring</option>
              <option value="overwatch">Overwatch 2</option>
              <option value="hades">Hades</option>
              <option value="fifa">FIFA 23</option>
              <option value="mariokart">Mario Kart 8 Deluxe</option>
              <option value="residentevil">Resident Evil 4</option>
              <option value="tetris">Tetris</option>
            </select>
          </div>

          {/* 방송 설명 */}
          <div className="space-y-2">
            <label className="text-lg">방송 설명</label>
            <textarea
              name="description"
              onChange={(e) => setContents(e.target.value)}
              placeholder="방송에 대해 설명해주세요"
              className="w-full p-3 bg-zinc-800 rounded-lg border border-zinc-700 
                         focus:outline-none focus:ring-2 focus:ring-lime-500"
              rows={4}
              maxLength={500}
            />
          </div>

          {/* 방송 설정 */}
          <div className="space-y-4">
            <h2 className="text-lg">방송 설정</h2>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded text-lime-500 focus:ring-lime-500 bg-zinc-800 border-zinc-700"
                />
                <span>연령 제한 (19세 이상)</span>
              </label>
              
              <label className="fㅁlex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded text-lime-500 focus:ring-lime-500 bg-zinc-800 border-zinc-700"
                />
                <span>채팅 허용</span>
              </label>
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 bg-zinc-800 text-white rounded-lg 
                         hover:bg-zinc-700 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              onClick={sendRequest}
              className="px-6 py-2 bg-lime-600 text-white rounded-lg 
                         hover:bg-lime-500 transition-colors"
            >
              설정 적용
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SettingCast;
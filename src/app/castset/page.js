"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const SettingCast = () => {
  const router = useRouter();

  return (
    <>
    <Header />
    <div className="w-full min-h-screen flex flex-col bg-black text-white p-4">
      <div className="w-1/2 mx-auto my-auto">
        <h1 className="w-full flex justify-center text-3xl font-bold mb-8">방송 설정</h1>
        
        <form className="space-y-6">
          {/* 방송 제목 */}
          <div className="flex flex-col space-y-2">
            <label className="text-lg">방송 제목</label>
            <input
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
              className="w-full p-3 bg-zinc-800 rounded-lg border border-zinc-700 
                         focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            >
              <option value="">카테고리 선택</option>
              <option value="game">게임</option>
              <option value="talk">토크/캐주얼</option>
              <option value="music">음악</option>
              <option value="sports">스포츠</option>
              <option value="education">교육</option>
              <option value="other">기타</option>
            </select>
          </div>

          {/* 방송 설명 */}
          <div className="space-y-2">
            <label className="text-lg">방송 설명</label>
            <textarea
              name="description"
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
              
              <label className="flex items-center space-x-2">
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
              onClick={() => router.push("/broadcast")}
              className="px-6 py-2 bg-lime-600 text-white rounded-lg 
                         hover:bg-lime-500 transition-colors"
            >
              방송 시작
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SettingCast;
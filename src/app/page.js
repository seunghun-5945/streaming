import Home from '@/components/Home';
import SideBar from '@/components/SideBar';
import { Fragment } from 'react';
import { AiFillHome } from "react-icons/ai";

export default function HomePage() {
  return (
    <div className='min-w-screen w-auto over h-screen flex flex-row bg-slate-500'>
      <SideBar />
      <Home />
    </div>
  );
}
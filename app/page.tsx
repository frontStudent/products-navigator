"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FlipCard from "./components/FlipCard/Single";
import "./index.css";
import { sans } from "./style/fonts";
import NextSvg from '../public/NEXT.svg'

const Home: React.FC = () => {
  // useEffect(() => {
  //   document.documentElement.classList.add("dark");
  // }, []);
  return (
    <main>
      <section className="h-screen bg-white flex flex-col justify-center items-center dark:bg-black">
        <div className=" w-3/5 lg:flex flex-row justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                ease: "easeOut",
                bounce: 1,
                duration: 1,
              },
            }}
            className="flex-1 w-full"
          >
            <div className="lg:text-7xl md:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
              <div className={sans.className}>Products Navigator</div>
            </div>
            <div className="lg:text-5xl md:text-3xl text-xl my-5 text-slate-600">
              <div className={sans.className}>SYB个人作品导航站</div>
            </div>
          </motion.div>
          <div className="relative h-50 flex-1 ml-10 lg:block hidden">
            <Image
              src={NextSvg}
              className="absolute top-10 left-0"
              alt=""
              width={350}
              height={80}
              priority
            />
            <div className="-z-10 w-80 h-80 rounded-xl bg-gradient-conic from-purple-500 via-indigo-500 via-30% to-pink-500 blur-3xl opacity-45"></div>
          </div>
        </div>

        <div className=" w-2/3 lg:flex flex-row justify-center items-center lg:my-10">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 m-6 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
              Next.js + Tailwind CSS
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 m-6 my-8 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
              Writes Upside-Down
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 m-6 my-8 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
              Writes Upside-Down
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen bg-white flex flex-col justify-center items-center dark:bg-black">
        <div className=" w-3/5 lg:flex flex-row justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                ease: "easeOut",
                bounce: 1,
                duration: 1,
              },
            }}
            className="flex-1 w-full"
          >
            <div className="lg:text-7xl md:text-5xl text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
              <div className={sans.className}>Test Fortune</div>
            </div>
            <div className="lg:text-5xl md:text-3xl text-xl  my-5 text-slate-600 dark:text-slate-400">
              <div className={sans.className}>flip cards</div>
            </div>
          </motion.div>
          <div className="relative h-50 lg:flex-1 lg:ml-10">
            <div className="lg:flex md:flex flex-row justify-between items-center w-full hidden">
              <FlipCard />
              <FlipCard />
              <FlipCard />
            </div>
            <div className="flex flex-col justify-center items-center md:hidden lg:hidden">
              <FlipCard />
              <div className="flex mx-5">
                <FlipCard />
                <FlipCard />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-2/3 lg:flex flex-row justify-center items-center my-10 md:hidden hidden">
          <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 mx-6 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Origin
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 mx-6 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Technology
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 mx-6 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Rules
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;

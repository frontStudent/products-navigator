"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FlipCard from "./components/FlipCard/Single";
import "./index.css";
import { sans } from "./style/fonts";
import NextSvg from "./NEXT.svg";
const Home: React.FC = () => {
  // useEffect(() => {
  //   document.documentElement.classList.add("dark");
  // }, []);
  return (
    <main>
      <section className="h-screen bg-white flex flex-col justify-center items-center dark:bg-black">
        <div className="text-xl text-slate-800 fixed top-5 left-10 hover:text-purple-700 cursor-pointer">
        <div className={sans.className}>FRONT NEVER END</div>
        </div>
        <div className="text-md text-slate-600 fixed top-3 right-10 hover:text-purple-700 cursor-pointer">
          github
        </div>
        
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
              className="absolute top-14 left-0"
              alt=""
              width={350}
              height={80}
              priority
            />
            <div className="-z-10 w-80 h-80 rounded-xl bg-gradient-conic from-purple-500 via-indigo-500 via-30% to-pink-500 blur-3xl opacity-45"></div>
          </div>
        </div>

        <div className=" w-2/3 lg:flex flex-row my-5">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 m-6 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
              Technology
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              此导航站点使用 Next.js + Tailwind CSS + Framer Motion
              技术栈开发，并在Vercel上进行站点部署
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 m-6 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
              Content
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              此导航站点将简要介绍个人开发的小工具、文档笔记站点以及全栈项目等，并提供对应的掘金文章、npm以及github的链接地址
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 m-6 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
              Key Points
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              此导航站点针对不同屏幕宽度进行了内容适配，并且支持Light与Dark模式的一键换肤功能
            </p>
          </div>
        </div>
        <div className="text-xl my-5 text-slate-600 fixed bottom-4">
          <div className={sans.className}>--- Scroll to view more ---</div>
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
              通过随机抽三张扑克的方法，根据其组合结果来测试今日运势
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 mx-6 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Rules
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              （豹子）三张牌点数相同 大于 同花顺 大于 同花 大于 顺子 大于 一对 大于 散牌
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 mx-6 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Technology
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              难点在于卡片翻转的动画效果，主要通过transform属性的perspective与rotateY来实现
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;

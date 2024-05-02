
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import Image from '../assets/portfolioimage.png';
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const About = () => {
  useTitle("About");


  return (
    <main className="flex flex-col items-center justify-center dark:text-slate-100">
      <div className="visual my-5 mt-0 lg:max-w-xl">
        <img className="rounded-lg max-h-full" src={Image} alt="" />
      </div>
      <div className="text text-center my-5">
        <h1 className="text-5xl font-bold">Veljko Stefanović</h1>
        <p className="text-lg my-7 px-3 dark:text-slate-300">
          Welcome to the digital realm where creativity meets functionality! <br /> I'm a dedicated
          Frontend Engineer born on April 4th 2000 in Kragujevac.<br /> I'm in my senior year at
          the Faculty of Engineering Sciences in Kragujevac.<br /> My journey in the realm of web
          development is fueled by a fervent passion for crafting immersive digital experiences that
          resonate with users.
        </p>
      </div>
      <div className="text-center">
        <p  className="text-lg font-semibold text-blue-500 cursor-default">
          Tech Stack
        </p>
        <div className="tech-stack-container">
          <div className="flex flex-wrap justify-center items-center mt-4">
              <>
                <FaHtml5 className="text-5xl text-red-500 mx-2" />
                <FaCss3Alt className=" text-5xl text-blue-500 mx-2" />
                <SiTailwindcss className=" text-5xl text-blue-400 mx-2" />
                <FaReact className=" text-5xl text-blue-300 mx-2" />
                <FaJsSquare className=" text-5xl text-yellow-500 mx-2" />
                <SiRedux className=" text-5xl text-purple-600 mx-2" />
              </>
          </div>
            <p className="text-lg my-7 px-3 dark:text-slate-300">
            In my arsenal, I harness a versatile toolkit for crafting digital wonders, comprising React for interactive UIs, JavaScript for web interactivity, Redux for streamlined state management, Tailwind CSS for efficient design, CSS for styling finesse, HTML for foundational markup, and PHP for dynamic server-side scripting.</p>
        </div>
      </div>
      <div className="flex flex-row my-5">
      <Link to="/projects" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 mx-5 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Projects</Link>
      <Link to="/contact" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 mx-5 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Contact</Link>

      </div>
    </main>
  );
};

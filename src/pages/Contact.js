import React from 'react'
import { FaGithub, FaInstagram, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa"
import { useTitle } from "../hooks/useTitle"

export const Contact = () => {

  useTitle("Contact");

  return (
    <main>
      <div className="flex flex-col items-center justify-center dark:text-slate-100">
      <div className="text text-center my-5" >
        <h1 className="text-5xl font-bold">My social media</h1>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center dark:text-slate-100 m-5">
      
      <a href="https://github.com/VeljkoStefanovic613-2019" className="flex flex-row items-center ">
      <FaGithub className="text-5xl text-black dark:text-white mx-2 my-5" />
      <p>GitHub</p>
      </a>
      
      <a href="https://www.facebook.com/veljko.stefanovic.4" className="flex flex-row items-center ">
      <FaFacebook className="text-5xl text-blue-700 mx-2 my-5" />
      <p>Facebook</p>
      </a>
      
      <a href="https://www.instagram.com/veljko.stefanovic_scg/ " className="flex flex-row items-center ">
      <FaInstagram className="text-5xl text-pink-500 mx-2 my-5" />
      <p>Instagram</p>
      </a>

      <a href="mailto:veljko.s.007@gmail.com" className="flex flex-row items-center ">
      <FaEnvelope className="text-5xl text-black dark:text-white mx-2 my-5" />
      <p>Gmail: veljko.s.007@gmail.com</p>
      </a>
      
      <a href="https://www.linkedin.com/in/veljko-stefanovic-83a8b1128/" className="flex flex-row items-center ">
      <FaLinkedin className="text-5xl text-blue-700 mx-2 my-5" />
      <p>Linkedin</p>
      </a>
      
      </div>
    </main>
  )
}

import { Link } from "react-router-dom"
import Image from "../assets/portfolioimage.png"

export const Hero = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center dark:text-slate-100">
        <div className="text text-center my-5">
            <h1 className="text-5xl font-bold">Veljko Stefanović</h1>
            <p className="text-lg my-7 px-3 dark:text-slate-300">I'm a passionate frontend engineer with a focus on creating engaging and intuitive user experiences. <br /> With a keen eye for design and a knack for problem-solving, I strive to craft high-quality applications that delight users.</p>
            <Link to="/about" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Read more</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src={Image} alt="" />
        </div>
    </section>
  )
}

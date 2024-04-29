import { Routes, Route } from "react-router-dom";
import { About, Contact, Home } from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
    </>
  )
}

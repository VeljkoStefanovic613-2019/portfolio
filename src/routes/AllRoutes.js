import { Routes, Route } from "react-router-dom";
import { About, Contact, Home, Projects } from "../pages";
import { ProductDetail } from "../pages/ProductDetail";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="products/:id" element={<ProductDetail />} />
    </Routes>
    </>
  )
}

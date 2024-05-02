import React from 'react'
import { Hero } from "../components/Hero"
import { FeaturedProducts } from "../components/FeatureProducts"
import { useTitle } from "../hooks/useTitle"

export const Home = () => {
  useTitle("Home");

  return (
    <main>
      <Hero />
      <FeaturedProducts />
    </main>
  )
}

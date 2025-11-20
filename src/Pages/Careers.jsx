import React from 'react'
import Navbar from '../Components/Navbar'
import { Herosection } from '../Components/Herosection'
import { StatsSection } from '../Components/StatsSection'
import { Services } from '../Components/Services'
import{ Recentwork } from "../Components/RecentWork"
import { Skills } from "../Components/Skills"
import { ExperienceEducationSection } from "../Components/ExperienceEducationSection"
import { RecentBlogs } from '../Components/RecentBlogs'
import { ClintStories } from '../Components/ClintStories'
import { Footer } from '../Components/Footer'

export const Careers = () => {
  return (
    <div className=" ">
      <Navbar/>
      <Herosection/>
      <StatsSection/>
      <Services/>
      <Recentwork/>
      <ExperienceEducationSection/>
      <Skills/>
      <RecentBlogs/>
      <ClintStories/>
      <Footer/>

    </div>
  )
}

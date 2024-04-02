import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeServices, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeMissions = dynamic(() => import('../components/home/mission'))
const DynamicHomeServices = dynamic(() => import('../components/home/services'))
const DynamicHomeBenefits = dynamic(() => import('../components/home/benifits'))
const DynamicHomeContact = dynamic(() => import('../components/home/contact'))
const DynamicHomeHelp = dynamic(() => import('../components/home/help'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeMissions />
      <DynamicHomeServices />
      <DynamicHomeHelp />
      <DynamicHomeBenefits />
      <DynamicHomeContact />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'

/* Components */
import HeroPage from '../components/HeroPage'
import Navigation from '../components/Navigation'
import AboutMe from '../components/AboutMe'
import Work from '../components/Work'
import { createRef } from 'react'

const Home: NextPage = () => {

  const containerWidth:string = 'max-w-4xl';

  const workRef = createRef<Text>();

  return (
    <div>
      <Head>
        <title>Ivan Krushkov - Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <Navigation/>
        <HeroPage containerWidth={containerWidth}/>
        <AboutMe containerWidth={containerWidth}/>
        <Work id="work" ref={workRef} containerWidth={containerWidth}/>
      </div>
    </div>
  )
}

export default Home

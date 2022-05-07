import type { NextPage } from 'next'
import Head from 'next/head'
import { createRef } from 'react'

/* Components */
import HeroPage from '../components/HeroPage'
import Navigation from '../components/Navigation'
import AboutMe from '../components/AboutMe'
import Work from '../components/Work'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

const Home: NextPage = () => {

  const containerWidth:string = 'max-w-4xl';

  const workRef = createRef<Text>();

  return (
    <div>
      <Head>
        <title>Ivan Krushkov - Software Developer - Personal Portfolio and Work</title>
        <meta name="description" content="I use Engineering and Business Development to create long-term value through technology." />

        <meta property="og:url" content="http://ikrushkov.com/"/>
        <meta property="og:title" content="Ivan Krushkov - Software Developer - Personal Portfolio and Work" />
        <meta property="og:description" content="I use Engineering and Business Development to create long-term value through technology."/>
        <meta property="og:image" content={`https://www.ikrushkov.com/_next/image?url=%2Fmedia%2Fprofile_picture_500x.jpg&w=256&q=75`}/>

        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <Navigation/>
        <HeroPage containerWidth={containerWidth}/>
        <AboutMe id='about' containerWidth={containerWidth}/>
        <Work id="work" ref={workRef} containerWidth={containerWidth}/>
        <Resume id="resume" containerWidth={containerWidth}/>
        <Contact id="contact" containerWidth={containerWidth}/>
      </div>
    </div>
  )
}

export default Home

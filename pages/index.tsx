import type { NextPage } from 'next'
import Head from 'next/head'

/* Components */
import HeroPage from '../components/HeroPage'
import Navigation from '../components/Navigation'
import AboutMe from '../components/AboutMe'


const Home: NextPage = () => {

  const containerWidth:string = 'max-w-4xl';

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
      </div>
    </div>
  )
}

export default Home

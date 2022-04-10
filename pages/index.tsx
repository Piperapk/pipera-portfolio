import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/* Components */
import HeroPage from '../components/HeroPage'
import Navigation from '../components/Navigation'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ivan Krushkov - Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <Navigation/>
        <HeroPage/>
      </div>
    </div>
  )
}

export default Home

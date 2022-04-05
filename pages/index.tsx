import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroPage from '../components/HeroPage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ivan Krushkov - Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hi</h1>
      <HeroPage name='Ivanski'/>
    </div>
  )
}

export default Home

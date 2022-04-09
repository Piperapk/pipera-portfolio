import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/* Components */
import HeroPage from '../components/HeroPage'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ivan Krushkov - Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <nav className="m-3 flex justify-center space-x-4 uppercase">
          {[
            ['Home', '#'],
            ['Work', '#'],
            ['Contact', '#'],
          ].map(([title, url]) => (
            <a key={title} href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
          ))}
        </nav>
        <HeroPage/>
      </div>
    </div>
  )
}

export default Home

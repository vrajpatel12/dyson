import Head from 'next/head'
import Attachments from '../components/Attachments'
import Banner from '../components/Banner'
import Description from '../components/Description'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Middle from '../components/Middle'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dyson Supersonic™ hair dryer (Prussian blue/rich copper)</title>
        <meta name="description" content="The small, powerful Dyson digital motor V9 spins at up to 110,000rpm. Combined with Air Multiplier™ technology, it produces a high-pressure, high-velocity jet of controlled air, for fast drying and precision styling." />
        <link rel="icon" href="https://3-giftbox.com/lp/shop-dyson-supersonic-hair-dryer.src/img/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Header></Header>
        <Hero></Hero>
        <Middle></Middle>
        <Banner></Banner>
        <Attachments></Attachments>
        <Description></Description>
        <Footer></Footer>
      </main>
    </>
  )
}

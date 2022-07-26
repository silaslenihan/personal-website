import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Info from '../components/Info'


export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="p-5 border-b-2 pt-6 text-center text-5xl text-amber-50 ">
        Silas Lenihan
      </h1>
      <Info/>
      <Head>
        <title>Silas Lenihan</title>
        <meta name="description" content="Silas Lenihan Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    
    </div>
  )
}

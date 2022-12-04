import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Atom Mail - Home</title>
        <meta name="description" content="La mejor plataforma de Email Marketing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 class="visually-hidden">AtomMail</h1>

        <Header />
        <main></main>

    


      {/* <body> */}
      {/* </body> */}
    </div>
  )
}

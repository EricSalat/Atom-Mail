import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from '../components/Footer';
import SubscribeForm from '../components/SubscribeForm';
import Layout from '../components/Dashboard/Layout';
import Circle from '../components/Dashboard/Circle';
import ButtonStyles from "../styles/Button.module.css";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Atom Mail - Home</title>
        <meta name="description" content="La mejor plataforma de Email Marketing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="visually-hidden">AtomMail</h1>

      <Header />
      <Main />
      {/* <Layout /> */}
      <Footer />




      {/* <body> */}
      {/* </body> */}
    </div>
  )
}

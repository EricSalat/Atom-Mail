import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Footer from '../components/Footer';
import SubscribeForm from '../components/SubscribeForm';
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

      <main>

        <div className="container">
          <section id="hero" className="pt-4">
            <div className="row justify-content-center text-center">
              <h1 className="col-12 col-lg-9">SMS Marketing and <b>Email Marketing</b> Made Easy</h1>
              <p className="highlight-text my-3">You can get started with your marketing automation in a few minutes</p>
              <SubscribeForm
                id="email"
                content="Let's Talk" />
             

            
            </div>
          </section>
        </div>


      </main>


      <section></section>
      <Footer />




      {/* <body> */}
      {/* </body> */}
    </div>
  )
}

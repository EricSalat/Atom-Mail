import Image from 'next/image'
import styles from "../styles/Body.module.css";
import SubscribeForm from '../components/SubscribeForm';
import Card from "../components/Card";
import Layout from './Dashboard/Layout';
import NavBar from './Dashboard/NavBar';
import { BsBuilding, BsChatDots, BsBriefcase, BsHouseDoor } from "react-icons/bs";


export default function Main() {
  return (
    <main>
      <div className="container">
        <section id="hero" className="pt-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 col-lg-9">SMS Marketing and <b>Email Marketing</b> Made Easy</h1>
            <p className={`${styles["highlight-text"]} ${"my-3"}`}>
            You can get started with your marketing automation in a few minutes
            </p>
            <SubscribeForm
              id="email"
              content="Let's Talk" />
          </div>
        </section>

        <section>
          <div className="container">
            <Layout />
            <NavBar />
          </div>
        </section>

        <section id="solutions">
          <div className="container">
            <div className="d-flex justify-content-center text-center my-4">
              <h2 className="col-lg-8 col-10">Inbound marketing solutions for what yo need to do</h2>
            </div>

            <div className="d-flex justify-content-center">
              <Card id="card1" content={<BsBuilding size="3rem" className="mb-4" />} text="Enterprise" />
              <Card id="card2" content={<BsChatDots size="3rem" className="mb-4" />} text="SMS and self-employed" />
              <Card id="card3" content={<BsBriefcase size="3rem" className="mb-4" />} text="Agencies" />
              <Card id="card4" content={<BsHouseDoor size="3rem" className="mb-4" />} text="Institution" />
            </div>



            <div className="d-flex justify-content-center" >
              <div className="col-8" id="enterprise" >
                <h3>Enterprise</h3>
                <p>Enterprise Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas libero esse, eos obcaecati dolores aspernatur quibusdam quaerat unde voluptatum ut dignissimos iste, tempore incidunt animi, non ea fugit consectetur.</p>
                <p><a href="#" className="hightlighed-links">Find Out More</a></p>
              </div>
            </div>
            <div className="d-flex justify-content-center" >
              <div className="col-8 inactive" id="sms">
                <h3>SMS and self-employed</h3>
                <p>Atom is very useful for SMS and self-employed workers due to its ease of use to manage your campaigns for
                  a single platform, without the ned for a large team to carry them out.</p>
                <p><a href="#" className="hightlighed-links">Find Out More</a></p>
              </div>
            </div>
            <div className="d-flex justify-content-center" >
              <div className="col-8 inactive" id="agencies">
                <h3>Agencies</h3>
                <p>Agencies Agencies Lorem ipsum, dolor sit amet consectetur adipisicing elit. At officiis amet debitis aut rerum nihil deleniti consequuntur magni. Cupiditate tempora quibusdam corrupti nemo est dolores odio ipsum at, possimus officia?</p>
                <p><a href="#" className="hightlighed-links">Find Out More</a></p>
              </div>
            </div>
            <div className="d-flex justify-content-center" >
              <div className="col-8 inactive" id="institution">
                <h3>Institution</h3>
                <p>Institution Institution Lorem ipsum, dolor sit amet consectetur adipisicing elit. At officiis amet debitis aut rerum nihil deleniti consequuntur magni. Cupiditate tempora quibusdam corrupti nemo est dolores odio ipsum at, possimus officia?</p>
                <p><a href="#" className="hightlighed-links">Find Out More</a></p>
              </div>
            </div>
          </div>
        </section>




      </div>
    </main>

  );
}
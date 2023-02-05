import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div >
          <h1 style={{marginBottom: "1px"}}>
          Sublime 
          </h1>
          <h2 style={{ marginTop: "0px", marginBottom: "100pmx"}}>
            A language for movement 
          </h2>

          <h3 style={{color: "red"}}>
            Reproduce <a href="https://en.wikipedia.org/wiki/Direction_of_movement#/media/File:Step_directions.svg">this diagram and extend on it</a>
                        </h3>

          <h3 style={{color: "red"}}>
            Priotize by getting that done                        </h3>

          <h3 style={{color: "blue"}}>
            Write out specification 
          </h3>
          <h3 style={{color: "blue"}}>
            Write out screed for design
          </h3>
          <h3 style={{color: "blue"}}>
            Figure out how to use markdown in here
          </h3>
          <h3 style={{color: "blue"}}>
            Write a parser with tree sitter
          </h3>
          <h3 style={{color: "blue"}}>
            Define a data structure for describing dance 
          </h3>
          <h3 style={{color: "blue"}}>
             Create something that visualizes the movement, d3 or three js 
          </h3>
        </div>
        <Footer />
      </main>
    </>
  );
}

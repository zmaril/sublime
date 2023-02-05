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
          The Sublime Specification
          </h1>
          <h2 style={{ marginTop: "0px" }}>
            Detailed definition and description of Sublime 
          </h2>
          <h3 style={{marginTop: "100px", color: "blue"}}>
            Up next:
            Write things out more
          </h3>
        </div>
        <Footer />
      </main>
    </>
  );
}

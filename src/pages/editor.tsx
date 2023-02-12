import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "../components/footer"
import { Textarea } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  
  return (
    <>
      <main className={styles.main}>
        <div >
          <h1 style={{marginBottom: "1px"}}>
          Sublime Editor
          </h1>
          <h2 style={{ marginTop: "0px" }}>
            Try out the language right now 
          </h2>
    <Textarea
      value="There is a dancer"
    />
        </div>

    <Footer />
      </main>
    </>
  );
}
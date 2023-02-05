import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sublime - a language for movement</title>
        <meta name="description" content="Sublime - a language for movement" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div >
          <h1 style={{marginBottom: "1px"}}>
          Sublime 
          </h1>
          <h2 style={{ marginTop: "0px" }}>
            A language for movement 
          </h2>
          <h3 style={{marginTop: "100px", color: "blue"}}>
            Up next:
            Write things out more
          </h3>
        </div>


        <div className={styles.grid}>
          <a
            href="/examples"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Examples <span>-&gt;</span>
            </h2>
            <p className={inter.className}>See what you can already do with the language.</p>
          </a>

          <a
            href="/learn"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn how you can write down and visualize movements.
            </p>
          </a>

          <a
            href="/design"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Design <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              The reasoning behind the language and why it is needed.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Specification <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              A detailed description of the Sublime language. 
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

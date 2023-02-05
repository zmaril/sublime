import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className={styles.grid}>
      <a
        href="/examples"
        className={styles.card}
      >
        <h2 className={inter.className}>
          Examples <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          See what you can already do with the language.
        </p>
      </a>

      <a
        href="/learn"
        className={styles.card}
      >
        <h2 className={inter.className}>
          Learn <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Learn how you can write down and visualize movements.
        </p>
      </a>

      <a
        href="/editor"
        className={styles.card}
      >
        <h2 className={inter.className}>
          Editor <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Try the online editor for Sublime out right now
        </p>
      </a>

      <a
        href="/design"
      >
        <h2 className={inter.className}>
          Design <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          The reasoning behind the language and why it is needed.
        </p>
      </a>

      <a
        href="/specification"
        className={styles.card}
      >
        <h2 className={inter.className}>
          Specification <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          A detailed description of the Sublime language.
        </p>
      </a>
    </div>
  );
}

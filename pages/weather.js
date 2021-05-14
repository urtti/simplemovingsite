import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Big Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Big Weather</h1>
        <h2 className={styles.smallertitle}>Designed for MacOS Big Sur.</h2>
        <p className={styles.description}>
          This site is opening soon.
          <br />
          In the meantime, please don't hesitate to request support via email:
          <br />
          <br />
          <a href="mailto:support@frankbyte.com">Email Us</a>
        </p>
      </main>
    </div>
  );
}

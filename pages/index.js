import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>frankbyte.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>frankbyte.</h1>
        <br />
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <a href="https://owlocr.com">
              <h1 className={styles.title}>owlocr</h1>
            </a>
          </div>
          <div style={{ paddingLeft: "24px" }}>
            <a href="https://frankbyte.com/weather">
              <h1 className={styles.title}>big weather</h1>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

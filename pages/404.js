// 404.js
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function FourOhFour() {
  return (
    <div className={styles.container}>
      <Head>
        <title>frankbyte.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>
          <div>
            Looking for OwlOCR? --> <a href="https://owlocr.com">OwlOCR.com</a>.
          </div>
          <div>
            Looking for Big Weather? -->{" "}
            <a href="https://frankbyte.com/weather">Big Weather</a>.
          </div>
        </p>
      </main>
    </div>
  );
}

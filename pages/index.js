import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>We have moved.</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          defer
          data-domain="frankbyte.com"
          src="https://plausible.io/js/plausible.outbound-links.js"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>We have moved.</h1>
        <p className={styles.description}>
          Find us at <a href="https://owlocr.com">https://owlocr.com</a>.
        </p>
      </main>
    </div>
  );
}

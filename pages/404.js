// 404.js
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function FourOhFour() {
  return (
    <div className={styles.container}>
      <Head>
        <title>We have moved</title>
        <link rel="icon" href="/favicon.ico" />
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

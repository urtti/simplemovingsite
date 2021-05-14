import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <h2 className={styles.smallertitle}>Big Weather</h2>
        <p className={styles.description}>
          <b>Big Weather</b> has been designed to respect your privacy. It holds
          no personal data of yours on its own servers (which it does not have)
          and only requests the minimal data necessary to provide service.
          <br />
          <br />
          Big Weather uses third-party services to provide weather data and for
          essential app functionality like subscription management. These
          services may collect, process, and store information about you,
          including but not limited to your IP address and Location Information.
          These services include: Dark Sky, RevenueCat. <br />
          <br />
          Please refer to the privacy policies of these third-party data
          processors for information regarding their data practices.
          <br />
          <br />
          <b>Big Weather</b> uses <b>RevenueCat</b>{" "}
          (https://www.revenuecat.com/) for subscription management. The
          purchase is anonymized so that we cannot match the purchase to an
          Apple ID or an individual. That receipt data is held by Apple and
          RevenueCat. Please see RevenueCat privacy policies for further
          information.
          <br />
          <br />
          <b>Big Weather</b> uses the Apple owned <b>Dark Sky API</b>{" "}
          (https://www.apple.com/legal/privacy/en-ww/) for weather data. In the
          data requests we send the coordinates of your current location (if
          user grants permission) or the coordinates of the location you wish to
          see the weather data for. Please see Apple privacy policies for
          further information.
          <br />
          <br />
          <b>Big Weather</b> uses <b>Apple APIs</b> to do things like reverse
          geocode location. Please see Apple privacy policies for further
          information.
        </p>
      </main>
    </div>
  );
}

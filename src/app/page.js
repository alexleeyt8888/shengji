import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>升级</h1>
      </header>
      <main className={styles.main}>
        <Link href="/pages/play">
          <button className={styles.button}>Play</button>
        </Link>
        <Link href="/pages/rules">
          <button className={styles.button}>Rules</button>
        </Link>
      </main>
    </div>
  );
}

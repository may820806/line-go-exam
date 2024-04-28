import Head from "next/head";
import styles from "@/styles/DropOff.module.scss";
import LabelInput from "@/components/LabelInput";
import LabelInputNumber from "@/components/LabelInputNumber";
import LabelTextarea from "@/components/LabelTextarea";

export default function Home() {
  return (
    <>
      <Head>
        <title>送機行程 | Line go</title>
        <meta name="description" content="送機行程" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main}`}>
        <h1>送機行程</h1>
        <h2>送機計畫</h2>
        <LabelInput label="下車機場" name="name" />
        <LabelInput label="航班編號" name="name" />
        <h2>旅客資訊</h2>
        <LabelInput label="姓名" name="name" />
        <LabelInputNumber label="電話" name="name" />
        <LabelInput label="身份證字號/護照編號" name="name" />
        <LabelTextarea label="乘車備註" name="name" minRows={4} />
      </main>
    </>
  );
}

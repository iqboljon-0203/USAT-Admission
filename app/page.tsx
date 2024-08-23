import Head from "next/head";
import Hero from "@/customComponents/Hero/App";
import About from "@/customComponents/About/App";
import Info from "@/customComponents/Info/App";
import Bachelor from "@/customComponents/Bachelor/App";
import MagistrInfo from "@/customComponents/MagistrInfo/App";
import Magistr from "@/customComponents/Magistr/App";
import Questions from "@/customComponents/Questions/App";
 function Home() {
  return (
    <main>
       <Head>
        <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <Hero></Hero>
        <About></About>
        <Info></Info>
        <Bachelor></Bachelor>
        <MagistrInfo></MagistrInfo>
        <Magistr></Magistr>
        <Questions></Questions>
    </main>
  );
}
export default Home;
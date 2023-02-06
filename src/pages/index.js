import BestBody from "@/components/BestBody/BestBody";
import HealthySide from "@/components/HealthySide/HealthySide";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import StaticBar from "@/components/StaticBar/StaticBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar></Navbar>
      <Hero></Hero>
      <HealthySide></HealthySide>
      <StaticBar></StaticBar>
      <BestBody></BestBody>
    </div>
  );
}

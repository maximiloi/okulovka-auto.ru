import Autodrome from "./component/Autodrome";
import AutoPark from "./component/AutoPark";
import Classroom from "./component/Classroom";
import Header from "./component/Header";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Classroom />
        <AutoPark />
        <Autodrome />
      </main>
    </>
  );
}

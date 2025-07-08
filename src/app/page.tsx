import Autodrome from "./component/Autodrome";
import AutoPark from "./component/AutoPark";
import Classroom from "./component/Classroom";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Classroom />
      <AutoPark />
      <Autodrome />
    </>
  );
}

import Autodrome from "./component/Autodrome";
import AutoPark from "./component/AutoPark";
import Classroom from "./component/Classroom";
import Header from "./component/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Classroom />
        <AutoPark />
        <Autodrome />
      </main>
    </>
  );
}

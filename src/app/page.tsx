import Autodrome from "./component/Autodrome";
import AutoPark from "./component/AutoPark";
import Header from "./component/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AutoPark />
        <Autodrome />
      </main>
    </>
  );
}

import Navbar from "components/Navbar/Navbar";
import ChitchatButton from "components/sub_components/chitchatbutton";
import LongCard from "components/sub_components/longcard";
import MyCard from "components/sub_components/mycard";
export default function TailwindCards() {
  return (
    <>
      <Navbar />

      <MyCard />
      <ChitchatButton />
      <LongCard />
    </>
  );
}

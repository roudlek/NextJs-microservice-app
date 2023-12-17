import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header.js";
import Parfum from "components/Parfum/parfum";
import ListOfProducts from "components/learn/map/listOfProducts";
import UseStateHookComponent from "components/learn/allHooks/useStateHookComponent";
import Title from "../components/learn/props/title/Title" 

// const names = ['Mike', 'Jimmie', 'nova', 'yasuo']

export default function Home() {
  return (
    <>
      {/* // max-w-[2000px] */}
      
      <Navbar  />
      {/* <h1 className='text-red-800'>This is H1</h1>
      <Header title="Title from title props"/>
      {/* <h1>Let's dive in</h1> */}
      {/* <HandThumbUp/> */}
      {/* <Parfum /> */}
      <Title text="Learn Js for absolute beginners"></Title>
      <Title text="Learn Html for absolute beginners"></Title>
      {/* <ListOfProducts/> */}
      <UseStateHookComponent/>
    </>
  );
}

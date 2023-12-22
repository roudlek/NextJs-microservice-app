import Navbar from "components/Navbar/Navbar"
// import ChitchatButton from "components/sub_components/chitchatbutton"
// import LongCard from "components/sub_components/longcard"
// import MyCard from "components/sub_components/mycard"
import NikeFromNike from "components/sub_components/nikefromnike"
// import NikeShoe from "components/sub_components/nikeshoe"
// import SingleProductPage from "components/sub_components/singleProductPage"
export default function bunch(){
    return(
        <>
        <Navbar/>
        <div className="max-w-[2000px] m-auto"> 
        {/* this is a costum max size max-w-screen-8xl */}

        {/* <SingleProductPage/> */}

        <div className="bg-white grid grid-cols-2 gap-1.5 md:grid-cols-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
            <NikeFromNike/>
        </div>
{/* 


        <NikeShoe/>
        <MyCard/>     
        <ChitchatButton/>
        <LongCard/> */}
        </div>
        </>
    ) 
}
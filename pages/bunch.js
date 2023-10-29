import Navbar from "components/Navbar/Navbar"
import ChitchatButton from "components/sub_components/chitchatbutton"
import LongCard from "components/sub_components/longcard"
import MyCard from "components/sub_components/mycard"
export default function bunch(){
    return(
        <div className="bg-red-300">   
        

        
        <Navbar/>
        <MyCard/>     
        <ChitchatButton/>
        <LongCard/>
        </div>
    ) 
}
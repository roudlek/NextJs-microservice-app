import Navbar from "components/Navbar/Navbar";
import Image from "next/image";

export default function about(){
    return(
        <>

        <Navbar/>
        <h1>About us page</h1>

        <img src="/images/myphoto.png" alt="Your Name" />
        <Image src="/images/myphoto.png"
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"/>
        </>
    )
}
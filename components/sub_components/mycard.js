import Image from "next/image"

export default function MyCard(){
    return(
        <>
            <div className=" rounded-xl shadow-2xl p-2 my-2 mx-auto bg-white h-auto w-max max-w-max ">
            <Image src="/images/Abdelaziz_el_idrissi.jpg" 
            className=" mx-auto rounded-full m-6 "
            height={144}
            width={144} 
            alt="abdelaziz el idrissi's profile picture"/>
                <h2 className="mx-auto my-0 text-black text-center font-medium text-3xl space-x-4">Abdelaziz el idrissi</h2>
                <p className="mx-auto my-0 text-gray-500 text-center font-mono">Full Stack Web Developer </p>
            </div>
        </>
    )
}
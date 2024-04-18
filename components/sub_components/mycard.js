import Image from "next/image";

const name = "Abdelaziz El Idrissi";
export default function MyCard() {
  return (
    <>
      {/* <div className=" rounded-xl shadow-2xl p-2 my-2 mx-auto bg-white h-auto w-max max-w-max ">
            <Image src="/images/Abdelaziz_el_idrissi.jpg" 
            className=" mx-auto rounded-full m-6 "
            height={144}
            width={144} 
            alt="abdelaziz el idrissi's profile picture"/>
                <h2 className="mx-auto my-0 text-black text-center font-medium text-3xl space-x-4">Abdelaziz el idrissi</h2>
                <p className="mx-auto my-0 text-gray-500 text-center font-mono">Full Stack Web Developer </p>
            </div> */}

      <div className="rounded-xl shadow-2xl p-4 my-6 mx-auto bg-white h-auto w-max max-w-max flex flex-col items-center">
        <Image
          src="/images/Abdelaziz_el_idrissi.jpeg"
          className="rounded-full m-6"
          height={144}
          width={144}
          alt="Abdelaziz el idrissi's profile picture"
        />
        <h2 className="text-3xl font-medium text-center text-blue-600 my-2">
          {name.toUpperCase()}
        </h2>
        <p className="text-gray-600 text-center font-mono text-lg">
          Front-end Web Developer
        </p>
      </div>
    </>
  );
}

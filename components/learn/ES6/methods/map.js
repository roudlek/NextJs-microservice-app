// import Image from "next/image";

import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ListOfProducts() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    await fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error: ${response.status}`);
        }
      })
      // the returned value of first then goes to second then as param, the returned value of second then goes to third as param and so on ...
      // this ensure that data is availlable when going to next then (step)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(`Could not get products, error: ${error}`);
      });
  }

  // useEffect allows you to run code after component mount
  useEffect(() => {
    fetchData();
    return () => {};
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  // const router = useRouter()

  return (
    <div className="w-full my-12 bg-white grid grid-cols-1 gap-5 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
      {products.map((product) => (
        // <Link onClick={() => router.push(`/products/product/${encodeURIComponent(product.id)}`)} key={product.id}>
        // <Link href={`/products/page/${encodeURIComponent(product.id)}`} key={product.id}>

          <div key={product.id} className="m-auto w-11/12 bg-gray-800 rounded-lg shadow-lg">
            <Image
              className="object-cover rounded-t-lg min-w-full"
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              priority={true}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">
                {product.title}
              </h2>
              <p className="text-gray-400">${product.price}</p>
            </div>
          </div>
        // </Link>
      ))}
    </div>
  );
}

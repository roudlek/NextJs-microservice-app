import Navbar from "components/Navbar/Navbar";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function OneProductById({productId}) {
  const [product, setProduct] = useState(null);

  async function fetchProductById() {
    await fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        if (response.ok) {
          const productInfo = response.json();
          return productInfo;
        }
        else {
            console.error(`HTTP error: ${response.status}`);
          }
      })
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error)=>console.error(`error: ${error}`));
  }
  useEffect(() => {
    fetchProductById();
    return () => {};
  }),
    [productId];

  return (
    <>
      <Navbar />
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </>
  );
}

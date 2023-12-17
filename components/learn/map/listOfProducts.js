import Image from "next/image";

const products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    }
]
export default function ListOfProducts() {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white text-5xl p-4">
        {products.map((product) => (
                <div
                className="rounded-b-lg min-w-[300px] max-w-[550px] mx-auto mb-28 mt-28 w-11/12 shadow-2xl
                grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 
              lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
              >
          <li key={product.id} className="bg-gray-800 p-4 rounded-md">
            <Image
              className="w-full object-cover rounded-l-lg mb-4"
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            />
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-400">${product.price}</p>
          </li>
          </div>
        ))}
      </ul>
    </>
  );
}

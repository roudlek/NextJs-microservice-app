function ParfumInfo() {
  return (
    <div className="rounded-b-lg bg-white h-full p-5 sm:max-h-[500px]">
      <h1 className="mb-3 text-gray-500 text-base font-montserrat tracking-[8px]">
        PERFUME
      </h1>
      <div className="mb-4 text-4xl font-fraunces font-extrabold">
        Gabrielle Essence Eau De Parfum
      </div>
      <div className="mb-5 text-gray-500 text-lg font-montserrat">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </div>
      <div>
        <div className="mb-4 flex items-center">
          {/* official price */}
          <div className=" text-4xl inline-block mr-4 font-fraunces text-primary-darkCyan font-extrabold">
            $149.99
          </div>
          {/* older price */}
          <div className="font-fraunces line-through text-gray-500">
            $169.99
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center font-semibold h-12 text-white bg-primary-darkCyan m-auto text-center rounded-md w-full hover:bg-primary-lightCyan">
        {/* Cart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        {/* Add to Cart Button */}
        Add to Cart
      </button>
    </div>
  );
}

export default ParfumInfo;

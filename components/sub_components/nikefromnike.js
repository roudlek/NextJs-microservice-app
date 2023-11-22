import Image from "next/image";

export default function NikeFromNike() {
  return (
    <>
      <div className="w-full m-auto">
        <div>
          <a
            aria-label="Nike Dunk Low"
            href="https://www.nike.com/t/dunk-low-big-kids-shoes-l6Jxh2/FB9109-300"
          >
            <Image
              className=""
              // w-full h-auto max-w-[100%]
              // width 100% by defaults
              // className="w-full" means wi
              alt="Nike Dunk Low Big Kids' Shoes"
              quality={100}
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/feb1679d-8e8c-47ac-bd4d-862d9706823a/air-jordan-1-low-og-white-red-mens-shoes-v0FbJt.png"
              // src="/images/nikepic.jpg"
              width={1500}
              height={1500}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              priority={true}
            />
          </a>
        </div>
        <div className="mt-3 ml-3 mr-3">
          <div className="text-red-800 font-medium">Coming Soon</div>
          <div className="bg-white text-black font-semibold">Nike Dunk Low</div>
          <div className="text-gray-500 font-light">Big Kids' Shoes</div>
          <div className="text-gray-500 font-light">1 Color</div>
          <div className="text-black font-semibold my-1.5">$90</div>
        </div>
      </div>
    </>
  );
}

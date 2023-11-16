export default function NikeShoe(){
    return(
    <div className="border-2 border-gray-200 my-4 max-w-sm rounded overflow-hidden shadow-lg mx-auto bg-white">
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/50c57ebb-64bc-4e3e-844f-7e9c35c8a03d/air-jordan-1-mid-mens-shoes-tXSJ73.png" alt="Product Image"
         className="h-auto w-auto " />
        
        {/* https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
        <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">Nike shoe</div>
            <p className="text-gray-700 text-base">Description of the product goes here. You can add more details or features in this section.</p>
        </div>
        <div className="px-6 py-4 ">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Running</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Sports</span>
        </div>
        <div className="">
            <div className="px-6 py-4 text-xl text-blue-600 text-center font-semibold ">$29.99</div>
        </div>

        <div className="bg-white-300 items-center container flex flex-col">
            <button className="bg-red-300 w-80 mx-3 my-3 px-6 py-2 bg-blue-500 hover:bg-gray-200 text-black border-2 border-gray-500 font-semibold rounded-full">Add to Cart</button>
        </div>
    </div>
    )
}
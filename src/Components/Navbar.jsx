import Logo from "../assets/SHOP.CO.svg";

function Navbar() {
  return (
    <nav className="bg-white shadow-md h-20 flex items-center justify-center gap-16 px-4 border border-gray-200">


   <dev className="flex flex-row items-center justify-center h-14 gap-4">


{/* Logo section */}


<div className=" w-50 h-14 flex items-center justify-center">

    <img src={Logo} alt="Logo" className="inline-block " />
</div>


{/* title section */}

<div className="bg-blue-700 w-[40vh] h-14 text-xl font-medium ">


Shop
On Sale
New Arrivals
Brands

</div>




<div className="bg-blue-700 w-[50vh] h-14 text-2xl font-bold">Shop.co</div>
<div className="bg-blue-700 w-40 h-14 text-2xl font-bold">Shop.co</div>

    


   </dev>

    </nav>
  );
}

export default Navbar;
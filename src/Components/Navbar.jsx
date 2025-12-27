import Logo from "../assets/SHOP.CO.svg";
import search from "../assets/Search.svg";
import User from "../assets/users.svg";
import carShop from "../assets/carShop.svg";

function Navbar() {
  return (
<nav className="bg-white h-20 flex items-center justify-center gap-16 px-4 border border-gray-200 overflow-x-auto">

<div className="flex flex-row items-center justify-center h-14 gap-4 whitespace-nowrap">

        {/* Logo section */}
        <div className="w-50 h-14 flex items-center justify-center">
          <img src={Logo} alt="Logo" className="inline-block" />
        </div>

        {/* title section */}
        <div className="w-[50vh] h-14 text-5 font-medium flex flex-row gap-6">
          <button>Shop</button>
          <button>On Sale</button>
          <button>New Arrivals</button>
          <button>Brands</button>
        </div>

        {/* Search */}
        <div className="w-[65vh] h-12 flex items-center justify-start rounded-full bg-gray-100 px-5">
          <img src={search} alt="Search" />
          <input
            className="w-full text-gray-500 px-4 bg-gray-100 rounded-full focus:outline-none"
            type="text"
            placeholder="Search for products"
          />
        </div>

        {/* Icons */}
        <div className="w-40 h-14 text-2xl font-bold flex flex-row items-center gap-3.5">
          <img src={carShop} alt="Cart" />
          <img src={User} alt="User" />
        </div>

      </div>

    </nav>
  );
}

export default Navbar;

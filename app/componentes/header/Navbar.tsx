import { RiGlobalLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500">
      <p className="hidden md:inline cursor-pointer">Become a host</p>
      <RiGlobalLine className="h-6 cursor-pointer" />
      <div className="flex space-x-2 border-2 p-2 rounded-full">
        <IoIosMenu className="h-6" />
        <FaRegUserCircle className="h-6" />
      </div>
    </div>
  );
};

export default Navbar;

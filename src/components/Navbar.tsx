

import Link from 'next/link';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { IoPersonCircleOutline } from "react-icons/io5";

function Navbar(){
 return (
   <nav className="flex flex-col">
   <div className='bg-white w-full h-18 flex justify-between items-center px-3 py-2 shadow-md border border-gray-200 '>
    <Link href="/">
    <FiSearch className="w-6 h-6 text-[#726E8D]"/>
    </Link>
   
     <h1 className="text-xl font-bold  items-center">Avion</h1>
     
     <div className="flex items-center space-x-4">
     
       <div className='flex gap-2 mr-30'>
          
      <Link href="/cart"> <FiShoppingCart className="w-6 h-6 text-[#726E8D]" /></Link>
      <Link href="/"> <IoPersonCircleOutline className="w-6 h-6 text-[#726E8D]" /></Link>
      
       </div>
     </div>
     </div>
        
        <div className="hidden lg:flex w-full h-18  justify-center space-x-10 items-center px-3 py-2 shadow-md border border-gray-300 bg-white">
        <Link href="/" className="text-[#726E8D]  hover:underline">Home</Link>
        <Link href="/products" className="text-[#726E8D]  hover:underline">Products</Link>
        <Link href="/productslisting" className="text-[#726E8D]  hover:underline">ProductsListing</Link>
        <Link href="/about" className="text-[#726E8D]  hover:underline">About Us</Link>
     
     </div>
   
   </nav>
 );
};

export default Navbar;
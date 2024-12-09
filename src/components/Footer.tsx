
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiPinterestFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-[#2A254B] text-white py-10">
            <div className="container mx-auto grid grid-cols-2  md:grid-cols-5 gap-8 px-4">

                <div>
                    <h4 className="font-bold text-2xl sm:text-0.5xl mb-4">Avion</h4>
                    <p className="mb-4 text-sm">Get 10% off your first order</p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 w-28 h-10 text-sm text-black rounded-l-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#726E8D] p-2"
                        >
                            &#9658;
                        </button>
                    </form>
                </div>


                <div>
                    <h4 className="font-bold text-1xl mb-4">Avion</h4>
                    <p className="text-sm">21 New York Street</p>
                    <p>New York City</p>
                    <p className="mt-4">United States of America</p>
                    <p>432 34</p>
                    {/* Link */}
                    <div className="flex space-x-4 mt-2">
                        <a href="/">
                            <FaFacebook className="text-2xl cursor-pointer" />
                        </a>
                        <a href="/">
                            <RiPinterestFill className="text-2xl cursor-pointer" />
                        </a>
                        <a href="/">
                            <FaInstagram className="text-2xl cursor-pointer" />
                        </a>
                    </div>
                </div>


                <div>
                    <h4 className="font-bold text-1xl mb-4">Menu</h4>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                New Arrival
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                Best Seller
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                Recently viewed
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="" className="hover:underline">
                                Popular this week
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                All Products
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-1xl mb-4">Categories</h4>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                Crockery
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                Furniture
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                Home Work
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                Plant Pots
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">
                                Chairs
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-1xl mb-4">Our company</h4>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                About us
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                Vacancies
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="hover:underline">
                                Contact us
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">
                                Return Policy
                            </a>
                        </li>
                    </ul>
                </div>



            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-lg">
                <p className="text-gray-400">© Copyright 2022.LTD</p>
            </div>
        </footer>
    );
}
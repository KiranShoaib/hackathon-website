"use client"
import Image from "next/image";
import { useState } from "react";
import Like from "@/components/Like";
import Brand from "@/components/Brand";
import SignUp from "@/components/Sign-up";

function DynamicPage({params}: {params: {slug: string}}) {

    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    const product = [
        { slug: "1", src: "/productpage1.png", alt: "product", title: "The Dandy chair", price: "£250" },
        { slug: "2", src: "/productpage2.png", alt: "product", title: "Rustic Vase Set", price: "£155" },
        { slug: "3", src: "/productpage3.png", alt: "product", title: "The Silky Vase", price: "£125" },
        { slug: "4", src: "/productpage4.png", alt: "product", title: "The Lucy Lamp", price: "£399" },
        { slug: "5", src: "/productpage5.png", alt: "product", title: "The Dandy chair", price: "£250" },
        { slug: "6", src: "/productpage6.png", alt: "product", title: "Rustic Vase Set", price: "£155" },
        { slug: "7", src: "/productpage7.png", alt: "product", title: "The Silky Vase", price: "£125" },
        { slug: "8", src: "/productpage8.png", alt: "product", title: "The Lucy Lamp", price: "£399" },
        { slug: "9", src: "/productpage1.png", alt: "product", title: "The Dandy chair", price: "£250" },
        { slug: "10", src: "/productpage2.png", alt: "product", title: "Rustic Vase Set", price: "£155" },
        { slug: "11", src: "/productpage3.png", alt: "product", title: "The Silky Vase", price: "£125" },
        { slug: "12", src: "/productpage4.png", alt: "product", title: "The Lucy Lamp", price: "£399" },
      ];

     // Find the product based on slug
  const data = product.find((item) => item.slug === params.slug);
  

  // If product not found, show error or fallback UI
  if (!data) {
    return <div>Product not found!</div>;
  }

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="bg-white p-4">
            <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border">
                    {/* Image Section */}
                    <div className="flex justify-center items-stretch">
                        <Image
                            src={data.src}
                            alt={data.title}
                            width={500}   
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col justify-between">
                        <h1 className="text-[#2A254B] text-3xl font-serif  font-bold mt-8 mb-8">{data.title}</h1>
                        <p className="text-lg text-gray-600">{data.price}</p>
                        <p className="mt-4 text-gray-700 text-sm">
                            A timeless ceramic vase with a tri-color grey glaze...
                        </p>

                        {/* Dimensions */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold">Dimensions</h2>
                            <div className="grid grid-cols-3 gap-4 text-center mt-2">
                                <div>
                                    <p className="font-medium">Height</p>
                                    <p>130cm</p>
                                </div>
                                <div>
                                    <p className="font-medium">Width</p>
                                    <p>56cm</p>
                                </div>
                                <div>
                                    <p className="font-medium">Depth</p>
                                    <p>78cm</p>
                                </div>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold">Quantity</h2>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-20 mt-2 px-2 py-1 border rounded-md"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex items-center space-x-4">
                            <button
                                className="px-4 py-2 bg-[#4E4D93] text-white rounded"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={handleFavorite}
                                className={`px-4 py-2 border rounded ${isFavorite ? "text-red-500 border-red-500" : "text-gray-600 border-gray-600"
                                    }`}
                            >
                                {isFavorite ? "Added to Favorites ❤" : "Save to Favorites"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Like/>
            <Brand/>
            <SignUp/>
        </div>
    );
}

export default DynamicPage;

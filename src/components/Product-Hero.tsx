"use client"
import Image from "next/image";
import { useState } from "react";

function ProductHero() {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

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
                            src="/producthero.png"
                            alt="The Dandy Chair"
                            width={500}   
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col justify-between">
                        <h1 className="text-[#2A254B] text-3xl font-serif  font-bold mt-8 mb-8">Rustic Vase Set</h1>
                        <p className="text-lg text-gray-600">$960</p>
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
        </div>
    );
}

export default ProductHero;

"use client";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

function Like() {

  const product = [
    {
      slug: "1",
      src: "/productpage1.png",
      alt: "product",
      title: "The Dandy chair",
      price: "£250",
    },
    {
      slug: "2",
      src: "/productpage2.png",
      alt: "product",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      slug: "3",
      src: "/productpage3.png",
      alt: "product",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      slug: "4",
      src: "/productpage4.png",
      alt: "product",
      title: "The Lucy Lamp",
      price: "£399",
    }
  ]
  
  const router = useRouter();
  const handleViewCollection = (name: string) => {
    router.push(name);
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="mt-10">
        <h2 className="text-[#2A254B] text-3xl text-center sm:text-left">
          You might also like
        </h2>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
      {product.map((item) => (
        <Link key={item.slug} href={`/products/${item.slug}`}>
          <div className="bg-white shadow-md">
            <div>
              <Image src={item.src} alt={item.alt} width={305} height={375} />
            </div>
            <div className="p-4 text-center sm:text-left">
              <h4 className="text-[#2A254B] text-lg font-semibold">
                {item.title}
              </h4>
              <p className="text-[#2A254B] text-sm mt-2">{item.price}</p>
            </div>
          </div>
        </Link>
      ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="w-[170px] h-[48px] text-[#2A254B] bg-[#F9F9F9]" onClick={() => handleViewCollection('/products')}>
          View Collection
        </button>
      </div>
    </div>
  );
}

export default Like;



import Image from "next/image";
import Link from "next/link";

Image;

function ProductItems() {
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
    },
    {
      slug: "5",
      src: "/productpage5.png",
      alt: "product",
      title: "The Dandy chair",
      price: "£250",
    },
    {
      slug: "6",
      src: "/productpage6.png",
      alt: "product",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      slug: "7",
      src: "/productpage7.png",
      alt: "product",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      slug: "8",
      src: "/productpage8.png",
      alt: "product",
      title: "The Lucy Lamp",
      price: "£399",
    },
    {
      slug: "9",
      src: "/productpage1.png",
      alt: "product",
      title: "The Dandy chair",
      price: "£250",
    },
    {
      slug: "10",
      src: "/productpage2.png",
      alt: "product",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      slug: "11",
      src: "/productpage3.png",
      alt: "product",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      slug: "12",
      src: "/productpage4.png",
      alt: "product",
      title: "The Lucy Lamp",
      price: "£399",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto flex justify-center items-center flex-wrap gap-5 px-5">
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
      <div className="text-center my-10">
        <button className="w-[170px] h-[48px] text-[#2A254B] bg-[#F9F9F9] ">
          View Collection
        </button>
      </div>
    </div>
  );
}

export default ProductItems;

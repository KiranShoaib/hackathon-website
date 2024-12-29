"use client";
import Image from "next/image";
import ceramics1 from "../../public/ceramics1.png";
import ceramics2 from "../../public/ceramics2.png";
import ceramics3 from "../../public/ceramics3.png";
import ceramics4 from "../../public/ceramics4.png";
import { useRouter } from "next/navigation";


function Ceramics() {

  const router = useRouter();
  const handleViewCollection = (name:string) => {
    router.push(name);
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="mt-10">
        <h2 className="text-[#2A254B] text-3xl text-center sm:text-left">
          New ceramics
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
        {/* Card 1 */}
        <div className="w-full sm:w-[48%] lg:w-[23%] bg-white shadow-md">
          <Image
            src={ceramics1}
            alt="ceramics picture"
            className="w-full h-auto"
          />
          <div className="p-4 text-center sm:text-left">
            <h4 className="text-[#2A254B] text-lg font-semibold">
              The Dandy chair
            </h4>
            <p className="text-[#2A254B] text-sm mt-2">£250</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[48%] lg:w-[23%] bg-white shadow-md">
          <Image
            src={ceramics2}
            alt="ceramics picture"
            className="w-full h-auto"
          />
          <div className="p-4 text-center sm:text-left">
            <h4 className="text-[#2A254B] text-lg font-semibold">
              Rustic Vase Set
            </h4>
            <p className="text-[#2A254B] text-sm mt-2">£155</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[48%] lg:w-[23%] bg-white shadow-md">
          <Image
            src={ceramics3}
            alt="ceramics picture"
            className="w-full h-auto"
          />
          <div className="p-4 text-center sm:text-left">
            <h4 className="text-[#2A254B] text-lg font-semibold">
              The Silky Vase
            </h4>
            <p className="text-[#2A254B] text-sm mt-2">£125</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-[48%] lg:w-[23%] bg-white shadow-md">
          <Image
            src={ceramics4}
            alt="ceramics picture"
            className="w-full h-auto"
          />
          <div className="p-4 text-center sm:text-left">
            <h4 className="text-[#2A254B] text-lg font-semibold">
              The Lucy Lamp
            </h4>
            <p className="text-[#2A254B] text-sm mt-2">£399</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center my-10">
        <button className="w-[170px] h-[48px] text-[#2A254B] bg-[#F9F9F9]" onClick={() => handleViewCollection('/products')}>
          View Collection
        </button>
      </div>
    </div>
  );
}

export default Ceramics;

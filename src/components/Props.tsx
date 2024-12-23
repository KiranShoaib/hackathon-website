import Image from "next/image";

interface IProps {
    Image: string,
    title: string,
    price: string 
}

function Prop(props:IProps) {
    return(
        
            <div className="w-full sm:w-[48%] lg:w-[23%] bg-white shadow-md">
          <Image
            src={props.Image}
            alt={props.title}
            width={305}
            height={375}
            className="w-full h-auto"
          />
          <div className="p-4 text-center sm:text-left">
            <h4 className="text-[#2A254B] text-lg font-semibold">
              {props.title}
            </h4>
            <p className="text-[#2A254B] text-sm mt-2">{props.price}</p>
          </div>
        </div>
        
    )
}

export default Prop
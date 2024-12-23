import Prop from "./Props";

function ProductItems(){
    return(
        <div>
            <div className="max-w-[1440px] mx-auto flex flex-wrap gap-5 px-5">
            <Prop Image="/productpage1.png" title="The Dandy chair" price="£250"/>
            <Prop Image="/productpage2.png" title="Rustic Vase Set" price="£155"/>
            <Prop Image="/productpage3.png" title="The Silky Vase" price="£125"/>
            <Prop Image="/productpage4.png" title="The Lucy Lamp" price="£399"/>
            <Prop Image="/productpage5.png" title="The Dandy chair" price="£250"/>
            <Prop Image="/productpage6.png" title="Rustic Vase Set" price="£155"/>
            <Prop Image="/productpage7.png" title="The Silky Vase" price="£125"/>
            <Prop Image="/productpage8.png" title="The Lucy Lamp" price="£399"/>
            <Prop Image="/productpage1.png" title="The Dandy chair" price="£250"/>
            <Prop Image="/productpage2.png" title="Rustic Vase Set" price="£155"/>
            <Prop Image="/productpage3.png" title="The Silky Vase" price="£125"/>
            <Prop Image="/productpage4.png" title="The Lucy Lamp" price="£399"/>
        </div>
         <div className="text-center my-10">
         <button className="w-[170px] h-[48px] text-[#2A254B] bg-[#F9F9F9] ">
           View Collection
         </button>
       </div>
        </div>
    )
}

export default ProductItems
import ProductHero from "@/components/Product-Hero";
import Like from "@/components/Like";
import Brand from "@/components/Brand";
import SignUp from "@/components/Sign-up";

function ProductsListing(){
    return(
        <div>
            <ProductHero/>
            <Like/>
            <Brand/>
            <SignUp/>
        </div>
    )
}

export default ProductsListing
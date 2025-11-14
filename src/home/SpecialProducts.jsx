import { H2 } from "../ui/Heading";

import ProductsCarousel from "../shared/ProductsCarousel";
import { CropAndFreshProducts } from "../assets/freshProduces";
import { DairyAndLivestockProducts } from "../assets/dairyLivestock";
import { SeedAndSaplingProducts } from "../assets/seedsSaplings";

function SpecialProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <H2>Special Products</H2>

        <ProductsCarousel
          data={[
            ...CropAndFreshProducts,
            ...DairyAndLivestockProducts,
            ...SeedAndSaplingProducts,
          ]}
        />
      </div>
    </section>
  );
}

export default SpecialProducts;

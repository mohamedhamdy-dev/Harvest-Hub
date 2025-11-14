import { H2 } from "../../ui/Heading";
import ProductsCarousel from "../../shared/ProductsCarousel";
import { CropAndFreshProducts } from "../../assets/freshProduces";
import { DairyAndLivestockProducts } from "../../assets/dairyLivestock";
import { SeedAndSaplingProducts } from "../../assets/seedsSaplings";

export default function RelatedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <H2>related products</H2>

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

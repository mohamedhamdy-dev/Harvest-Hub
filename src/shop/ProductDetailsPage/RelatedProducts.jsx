import { H2 } from "../../ui/Heading";
import ProductsCarousel from "../../shared/ProductsCarousel";
import { combinedCropAndFreshProducts } from "../../assets2/freshProduces";
import { combinedDairyAndLivestockProducts } from "../../assets2/dairyLivestock";
import { combinedSeedAndSaplingProducts } from "../../assets2/seedsSaplings";

export default function RelatedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <H2>related products</H2>

        <ProductsCarousel
          data={[
            ...combinedCropAndFreshProducts,
            ...combinedDairyAndLivestockProducts,
            ...combinedSeedAndSaplingProducts,
          ]}
        />
      </div>
    </section>
  );
}

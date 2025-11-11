import { H2 } from "../ui/Heading";

import ProductsCarousel from "../shared/ProductsCarousel";
import { useTranslation } from "react-i18next";
import { combinedCropAndFreshProducts } from "../assets2/freshProduces";
import { combinedDairyAndLivestockProducts } from "../assets2/dairyLivestock";
import { combinedSeedAndSaplingProducts } from "../assets2/seedsSaplings";

function SpecialProducts() {
  const { t } = useTranslation("home");
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <H2>{t("headings.special")}</H2>

        <ProductsCarousel
          data={[
            // ...cropAndFreshProducesData,
            ...combinedCropAndFreshProducts,
            ...combinedDairyAndLivestockProducts,
            ...combinedSeedAndSaplingProducts,
          ]}
        />
      </div>
    </section>
  );
}

export default SpecialProducts;

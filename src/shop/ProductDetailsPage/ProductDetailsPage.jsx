import BreadCrumb from "../../shared/BreadCrumb";
import ProductImagePreview from "../../shared/ProductImagePreview";
import ProductSpecifications from "./ProductSpecifications";
import ProductReviews from "../reviews/ProductReviews";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";

import { splitCommonPrefix } from "../../utils/helpers";

import { combinedCropAndFreshProducts } from "../../assets2/freshProduces";
import { combinedDairyAndLivestockProducts } from "../../assets2/dairyLivestock";
import { combinedSeedAndSaplingProducts } from "../../assets2/seedsSaplings";

function fetchPDPData(id, type = "") {
  const match = id.match(/^[^-]+/);

  switch (match[0]) {
    case "fruit":
    case "vege":
      return combinedCropAndFreshProducts.find((product) => product.id === id);
    case "animal":
      return combinedDairyAndLivestockProducts.find(
        (product) => product.id === id,
      );
    case "seed":
      return combinedSeedAndSaplingProducts.find(
        (product) => product.id === id,
      );
  }
}

//////////////////////////////////////////////////////////

function ProductDetailsPage() {
  const { id } = useParams();

  // const product = productDetailsData.find((p) => p.id === Number(id));
  const product = fetchPDPData(id);

  const specifications = {
    id: id,
    productName: product.productName,
    productImages: product.images,
    stock: product.stock,
    description: product.description,
    rating: product.rating,
    discountPrice: product.discountPrice,
    price: product.price,
    specs: product.specs,
    numberOfReviews: product.reviews.length,
  };

  const images = {
    prefix: splitCommonPrefix(product.images).prefix,
    variables: splitCommonPrefix(product.images).variables,
  };

  return (
    <>
      <BreadCrumb />
      <main className="container mx-auto mb-16 px-2">
        <div className="flex flex-col items-center rounded-2xl bg-white p-4 lg:flex-row">
          <ProductImagePreview
            data={images}
            imageClassName=" max-w-[500px] aspect-square rounded-2xl"
            iconClassName="overflow-hidden rounded-2xl"
          />
          <ProductSpecifications data={specifications} />
        </div>
        <div className="my-5 overflow-hidden rounded-3xl">
          <ProductReviews data={product.reviews} />
        </div>
        <RelatedProducts />
      </main>
    </>
  );
}

export default ProductDetailsPage;

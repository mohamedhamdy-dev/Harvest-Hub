import { Rating } from "@material-tailwind/react";
import AddToCartButton from "../../shared/AddToCartButton";
import ProductShare from "./ProductShare";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices/cartSlice";
import { extractPriceDetails } from "../../utils/helpers";

ProductSpecifications.propTypes = { data: propTypes.object };

export default function ProductSpecifications({ data }) {
  const {
    id,
    productName,
    productImages,
    stock,
    description,
    numberOfReviews,
    rating,
    discountPrice,
    price,
    specs,
  } = data;

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addItem({ id }));
  }

  return (
    <div className="w-full bg-white p-4 lg:w-1/2 xl:w-3/5">
      <div className="">
        <h3 className="mb-5 text-xl capitalize">{productName}</h3>
        <div className="mb-2">
          <div>
            <Rating value={Math.trunc(rating)} readonly />
          </div>
          <a className="text-gray-700 hover:text-apple-500">
            {" "}
            {numberOfReviews
              ? `${numberOfReviews} review${numberOfReviews > 1 ? "s" : ""}`
              : "0 reviews"}
          </a>
          <a className="text-gray-700 hover:text-apple-500">Write a review</a>
        </div>
        <div>
          <span className="text-sm text-gray-800 line-through">{price}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center text-2xl text-apple-500">
              {/* {discountPrice > 0 ? discountPrice : price} */}
              {extractPriceDetails(discountPrice).numberOnly > 0
                ? extractPriceDetails(discountPrice).numberOnly
                : extractPriceDetails(price).numberOnly}
            </span>
            <span className="flex h-fit items-center justify-center bg-apple-500 px-1 py-[2px] text-[12px] font-bold text-white">
              Save{" "}
              {Math.round(
                (1 -
                  extractPriceDetails(discountPrice).numberOnly /
                    extractPriceDetails(price).numberOnly) *
                  100,
              )}
              %
            </span>
          </div>
        </div>
        <span className="mb-4 text-xs">Tax included</span>
        <p className="mb-4 text-sm">{description}</p>
      </div>
      <ItemSpecifications data={specs} />
      <div>
        <div className="flex items-center gap-5">
          <div className="my-2">
            {stock >= 1 ? (
              <span className="text-xl font-bold text-green-500">In Stock</span>
            ) : (
              <span className="font-bold text-red-500">Sold Out</span>
            )}
          </div>
          <div onClick={handleAddToCart}>
            <AddToCartButton itemID={id} />
          </div>
        </div>
        <div className="my-4">
          <a
            href="add to wish list"
            className="flex w-fit items-center justify-center gap-2"
          >
            <span className="inline-block rounded-full bg-mercury-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 256 256"
              >
                <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
              </svg>
            </span>
            <span className="inline-block text-sm text-gray-700 hover:text-apple-500">
              Add to Wishlist
            </span>
          </a>
        </div>
        <ProductShare />
      </div>
    </div>
  );
}

ItemSpecifications.propTypes = { data: propTypes.object };

function ItemSpecifications({ data }) {
  return (
    <div className="mb-4">
      <ul className="flex max-h-40 flex-col flex-wrap gap-1 text-gray-200">
        {Object.entries(data).map(([key, value]) => (
          <li
            key={value}
            className="rounded-lg bg-gradient-to-bl from-emerald-500 to-emerald-900 py-2 pl-4"
          >
            <strong className="capitalize">
              {key
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .replace(/^./, (s) => s.toUpperCase())}
              :
            </strong>{" "}
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

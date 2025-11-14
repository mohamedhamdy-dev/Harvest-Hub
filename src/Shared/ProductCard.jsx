import propTypes from "prop-types";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";
import { addItem } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({
  data,
  className,
  imgClassName = "",
  type,
}) {
  const { id, rating, productImage, productName, discountPrice, price } = data;

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addItem({ id }));
  }

  return (
    <div
      className={`flex h-full max-w-[312px] cursor-pointer flex-col items-center overflow-hidden rounded-[32px] border-2 bg-white ${className}`}
    >
      {/* image and stars  */}
      <div className="group relative flex flex-col items-center">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={`/product-details/${id}`}
          className={`max-h-[280] max-w-[280px] outline-none ${imgClassName}`}
        >
          <img
            src={productImage}
            alt={productName}
            className="duration-300 group-hover:scale-110"
          />
        </Link>
        <Rating value={Math.round(rating)} readonly className={"z-50 my-1"} />
      </div>
      {/* text data and cart  */}
      <div className="z-10 flex w-11/12 flex-col items-center gap-2 border-t-2 border-mercury-100 py-4">
        <div className="line-clamp-1 capitalize text-gray-900">
          {productName}
        </div>

        <div className="text-apple-500">
          {Number(discountPrice) !== 0 ? (
            <>
              {discountPrice}
              <span className="ml-1 text-sm text-gray-600 line-through">
                {price}
              </span>
            </>
          ) : (
            <>${price}</>
          )}
        </div>

        <div onClick={handleAddToCart}>
          <AddToCartButton itemID={id} />
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: propTypes.object,
  className: propTypes.string,
  imgClassName: propTypes.string,
  type: propTypes.string,
};

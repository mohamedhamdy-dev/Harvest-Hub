import { Link } from "react-router-dom";

function BigPromo() {
  return (
    <Link
      to="/products/agricultural-products"
      className="group relative overflow-hidden"
    >
      <img
        src={`${import.meta.env.BASE_URL}bigPromo/big-promo-3.jpg`}
        alt="big promo"
        className="h-52 w-full duration-700 group-hover:scale-105 sm:h-60 md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[35rem]"
      />

      {/* text part */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center text-center lg:gap-4">
        <h3 className="md:b capitalize text-[#222] sm:text-lg md:text-2xl lg:text-3xl xl:mb-2 xl:text-4xl">
          Save 20% on Fresh Picks!
        </h3>
        <p className="text-balance text-xs capitalize text-gray-600 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Fresh farm produce at unbeatable prices — limited time!
        </p>
      </div>
    </Link>
  );
}

export default BigPromo;

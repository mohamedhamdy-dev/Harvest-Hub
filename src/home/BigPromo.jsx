function BigPromo() {
  return (
    <div className="group relative overflow-hidden">
      <a href="/shop big promo now">
        <img
          src={`${import.meta.env.BASE_URL}bigPromo/big-promo-3.jpg`}
          alt="big promo image"
          className="w-full duration-700 group-hover:scale-105"
        />
      </a>
      {/* text part */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center lg:gap-4">
        <h3 className="capitalize text-[#222] sm:text-2xl md:text-3xl 2xl:text-4xl">
          Save 20% on Fresh Picks!
        </h3>
        <p className="hidden text-balance capitalize text-gray-600 sm:block md:text-xl lg:mb-5 lg:text-xl 2xl:text-2xl">
          Get farm-fresh fruits and veggies at unbeatable prices—limited time
          only!
        </p>

        <a
          href="# shop now"
          className="flex items-center justify-center rounded-full bg-apple-500 px-3 py-2 text-xs uppercase text-white duration-300 hover:bg-black sm:px-4 lg:px-8 lg:py-3"
        >
          <span className="relative top-[2px]">shop now</span>
        </a>
      </div>
    </div>
  );
}

export default BigPromo;

import propTypes from "prop-types";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductsCarousel({ data }) {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: false,
    dots: false,
    draggable: false,
    speed: 500,
    rows: 2,

    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 1140,

        settings: {
          slidesToShow: 3,
          dots: false,
          infinite: false,
          // arrows: false,
        },
      },

      {
        breakpoint: 960,

        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 540,

        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl">
      <Slider {...settings}>
        {data?.map((product) => (
          <div key={product.id}>
            <div className="m-2">
              <ProductCard
                data={product}
                imgClassName="size-[240px]"
                className="mx-auto mb-[10px] w-full md:mx-0 md:max-w-none"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -right-16 top-1/2 z-10 w-fit -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 duration-300 hover:bg-apple-500 hover:text-white lg:-right-10"
    >
      <FaChevronRight />
    </div>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -left-16 top-1/2 z-10 w-fit -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 duration-300 hover:bg-apple-500 hover:text-white lg:-left-10"
    >
      <FaChevronLeft />
    </div>
  );
}

PrevArrow.propTypes = {
  onClick: propTypes.func,
};
NextArrow.propTypes = {
  onClick: propTypes.func,
};

ProductsCarousel.propTypes = { data: propTypes.array };

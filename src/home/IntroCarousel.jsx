import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import propTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const introData = [
  {
    id: 1,

    promoTitle: "Fresh Goodness",
    overlay: false,
    promoDesc: "Naturally crisp, farm-fresh vegetables picked just for you.",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-22.webp`,
  },
  {
    id: 2,
    promoTitle: "Nature's Sweets",
    overlay: false,
    promoDesc: "Enjoy the freshest, juiciest fruits straight from the orchard.",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-33.webp`,
  },

  {
    id: 3,
    promoTitle: "Stronger Farms, Better Yields",
    overlay: true,
    promoDesc: "Providing the tools and resources farmers need to thrive.",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-66.webp`,
  },
  {
    id: 4,
    promoTitle: "Farming for the Future",
    overlay: true,
    promoDesc: "Empowering farmers for a sustainable, greener future.",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-77.webp`,
  },
];

export default function IntroCarousel() {
  var settings = {
    dots: true,
    infinite: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots  bottom-[0] ",
    customPaging: () => (
      <div className="active-helper size-2 rounded-full bg-apple-500 opacity-50"></div>
    ),
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          dots: false,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {introData.map((item, key) => (
        <IntroItem data={item} key={key} />
      ))}
    </Slider>
  );
}

function IntroItem({ data }) {
  const { promoTitle, promoDesc, promoBanner, overlay } = data;

  const overlayText = "bg-black/60 rounded-2xl lg:p-10";

  return (
    <article className="relative">
      <img
        src={promoBanner}
        alt={promoTitle}
        className="min-h-[250px] w-full md:h-96 lg:h-[30rem] xl:h-[35rem] 2xl:h-[43rem]"
      />

      <div
        className={`absolute left-1 top-1/2 z-10 -translate-y-1/2 p-4 sm:left-[5%] ${overlay && overlayText} `}
      >
        <p
          className={` ${overlay ? "text-gray-200" : "text-black"} text-lg sm:text-xl md:text-3xl lg:mb-1 lg:text-4xl xl:text-5xl 2xl:mb-2`}
        >
          {promoTitle}
        </p>

        <p
          className={`text-xs ${overlay ? "text-gray-400 sm:w-56" : "text-gray-600"} w-48 sm:text-sm md:w-64 md:text-base lg:w-80 lg:text-xl xl:w-[28rem] xl:text-2xl 2xl:w-[36rem] 2xl:text-3xl`}
        >
          {promoDesc}
        </p>
      </div>
    </article>
  );
}

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-5 top-1/2 z-10 w-fit -translate-y-1/2 cursor-pointer rounded-full bg-apple-500 p-2 text-white duration-300 hover:bg-black"
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
      className="absolute left-5 top-1/2 z-10 w-fit -translate-y-1/2 cursor-pointer rounded-full bg-apple-500 p-2 text-white duration-300 hover:bg-black"
    >
      <FaChevronLeft />
    </div>
  );
}

//////////////////////////////////

IntroItem.propTypes = {
  data: propTypes.object,
};

PrevArrow.propTypes = {
  onClick: propTypes.func,
};
NextArrow.propTypes = {
  onClick: propTypes.func,
};

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const introData = [
  {
    id: 1,
    promoTitle: "Farm-Fresh Goodness",
    overlay: false,
    promoDesc:
      "Crisp, nutritious veggies, straight from local farms to your table.",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-22.webp`,
    promoLink: "link2",
  },
  {
    id: 2,
    promoTitle: "Nature's Sweetest Bounty",
    overlay: false,
    promoDesc:
      "Savor the juiciest, ripest fruits straight from the orchards to your table.",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-33.webp`,
    promoLink: "link2",
  },

  {
    id: 3,
    promoTitle: "Stronger Farms, Better Harvests",
    overlay: true,
    promoDesc: "Providing the tools and resources farmers need to thrive.",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-66.webp`,
    promoLink: "link2",
  },
  {
    id: 4,
    promoTitle: "Farming for the Future",
    overlay: true,
    promoDesc:
      "Empowering farmers with sustainable practices for a greener tomorrow.",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-77.webp`,
    promoLink: "link2",
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
  const { promoTitle, promoDesc, promoBanner, promoLink, overlay } = data;

  // const overlayText = "bg-black/60 rounded-2xl py-8 px-4";
  const overlayText = "bg-black/60 rounded-2xl ";

  return (
    <article className="relative">
      <img
        src={promoBanner}
        alt={promoTitle}
        className="min-h-52 w-full md:h-[315px] lg:h-[415px] xl:h-[475px] 2xl:h-[800px]"
      />

      <div
        // className={`absolute left-[5%] top-1/2 z-10 -translate-y-1/2 2xl:w-[800px] ${overlay && overlayText} `}
        className={`absolute left-[5%] top-1/2 z-10 -translate-y-1/2 p-8 2xl:w-[800px] ${overlay && overlayText} `}
      >
        <p
          // className={` ${overlay ? "text-gray-200" : "text-black"} my-1 sm:text-lg md:text-xl lg:mt-3 lg:text-3xl xl:text-4xl 2xl:mt-6 2xl:text-5xl`}
          className={` ${overlay ? "text-gray-200" : "text-black"} my-1 sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl`}
        >
          {promoTitle}
        </p>
        <p
          className={`text-[10px] ${overlay ? "text-gray-400" : "text-gray-600"} w-48 text-xs sm:w-72 md:text-base lg:w-96 lg:text-xl xl:w-[480px] xl:text-2xl 2xl:w-auto 2xl:max-w-[700px] 2xl:text-3xl`}
        >
          {promoDesc}
        </p>
        <Link
          to={promoLink}
          className="mt-2 inline-block cursor-pointer rounded-full bg-apple-500 px-3 py-1 text-sm text-white duration-300 hover:bg-black md:text-base lg:mt-6 2xl:mt-12"
        >
          Shop Now
        </Link>
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

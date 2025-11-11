import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const introData = [
  {
    id: 2,
    promoTitle: "introCarousel.promo1.title",
    textPosition: "left",
    overlay: false,
    promoDesc: "introCarousel.promo1.desc",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-22.webp`,
    promoLink: "link2",
  },
  {
    id: 3,
    promoTitle: "introCarousel.promo2.title",
    textPosition: "left",
    overlay: false,
    promoDesc: "introCarousel.promo2.desc",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-33.webp`,
    promoLink: "link2",
  },
  {
    id: 4,
    promoTitle: "introCarousel.promo3.title",
    textPosition: "center",
    overlay: true,
    promoDesc: "introCarousel.promo3.desc",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-44.jpg`,
    promoLink: "link2",
  },
  {
    id: 5,
    promoTitle: "introCarousel.promo4.title",
    textPosition: "center",
    overlay: true,
    promoDesc: "introCarousel.promo4.desc",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-55.png`,
    promoLink: "link2",
  },
  {
    id: 6,
    promoTitle: "introCarousel.promo5.title",
    textPosition: "left",
    overlay: true,
    promoDesc: "introCarousel.promo5.desc",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-66.jpg`,
    promoLink: "link2",
  },
  {
    id: 7,
    promoTitle: "introCarousel.promo6.title",
    textPosition: "left",
    overlay: true,
    promoDesc: "introCarousel.promo6.desc",
    promoBanner: `${import.meta.env.BASE_URL}banners/banner-77.jpg`,
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
  const { t } = useTranslation("home");

  const {
    promoTitle,
    promoDesc,
    promoBanner,
    promoLink,
    textPosition,
    overlay,
  } = data;

  const leftText = "left-[5%] top-1/2 z-10 -translate-y-1/2";
  const centerText =
    "left-1/2 top-1/2 z-10 -translate-y-1/2 flex flex-col items-center  -translate-x-1/2 text-balance text-center";
  const overlayText = "bg-black/60 rounded-2xl py-8 px-4";

  return (
    <article className="relative">
      <img
        src={promoBanner}
        alt={t(promoTitle)}
        className="min-h-52 w-full md:h-[315px] lg:h-[415px] xl:h-[475px] 2xl:h-[800px]"
      ></img>

      <div
        className={`absolute 2xl:w-[800px] ${textPosition === "left" && leftText} ${textPosition === "center" && centerText} ${overlay && overlayText} `}
      >
        <p
          className={` ${overlay ? "text-gray-200" : "text-black"} my-1 sm:text-lg md:text-xl lg:mt-3 lg:text-3xl xl:text-4xl 2xl:mt-6 2xl:text-5xl`}
        >
          {t(promoTitle)}
        </p>
        <p
          className={`text-[10px] ${overlay ? "text-gray-400" : "text-gray-600"} w-48 text-xs sm:w-72 md:text-base lg:w-96 lg:text-xl xl:w-[480px] xl:text-2xl 2xl:w-auto 2xl:max-w-[700px] 2xl:text-3xl`}
        >
          {t(promoDesc)}
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

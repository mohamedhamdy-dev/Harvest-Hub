import propTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const CategoryCarouselArray = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}thumbs/produces.png`,
    text: "categoryCarousel.produces",
  },

  {
    id: 2,
    image: `${import.meta.env.BASE_URL}thumbs/livestock.png`,
    text: "categoryCarousel.livestock",
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}thumbs/farmTech.png`,
    text: "categoryCarousel.farmTech",
  },

  {
    id: 4,
    image: `${import.meta.env.BASE_URL}thumbs/seedsSaplings.png`,
    text: "categoryCarousel.seeds",
  },
];

export default function CategoryCarousel() {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    className: "category-carousel",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="container mx-auto px-4 py-16">
      <Slider {...settings}>
        {CategoryCarouselArray.map((item, index) => (
          <CategoryItem data={item} key={index} />
        ))}
      </Slider>
    </section>
  );
}

function CategoryItem({ data }) {
  const { t } = useTranslation("home");
  return (
    <a
      href={`#${t(data.text)}`}
      className="group mx-auto block max-w-44 text-center text-xs"
    >
      <div className="mx-auto mb-2 w-[90%] cursor-pointer overflow-hidden rounded-full border-2 border-mercury-200 bg-white duration-700 group-hover:border-b-orange-500 group-hover:border-l-apple-500 group-hover:border-r-orange-500 group-hover:border-t-apple-500 group-hover:[transform:rotateY(180deg)]">
        <img
          src={data.image}
          alt={t(data.text)}
          className="mx-auto block w-full"
        />
      </div>
      <div className="middle-underline relative mx-auto w-40 rounded-full bg-white p-4 py-2 group-hover:after:w-full sm:text-sm md:text-base">
        {t(data.text)}
      </div>
    </a>
  );
}

CategoryItem.propTypes = {
  data: propTypes.object,
};

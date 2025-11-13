import propTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CategoryCarouselArray = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}thumbs/produces.png`,
    text: "Fruit & Veges",
  },

  {
    id: 2,
    image: `${import.meta.env.BASE_URL}thumbs/livestock.png`,
    text: "Dairy & Livestock",
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}thumbs/farmTech.png`,
    text: "Farm Technology",
  },

  {
    id: 4,
    image: `${import.meta.env.BASE_URL}thumbs/seedsSaplings.png`,
    text: "Seeds & Saplings",
  },
];

export default function CategoryCarousel() {
  return (
    <section className="container mx-auto grid grid-cols-2 gap-5 px-16 py-8 md:grid-cols-4 md:px-6 lg:px-32 xl:px-48 2xl:px-64">
      {CategoryCarouselArray.map((item, index) => (
        <CategoryItem data={item} key={index} />
      ))}
    </section>
  );
}

function CategoryItem({ data }) {
  return (
    <Link
      to={`#${data.text}`}
      className="group mx-auto block max-w-44 text-center text-xs"
    >
      <div className="mx-auto mb-2 size-28 cursor-pointer overflow-hidden rounded-full border-2 border-mercury-200 bg-white duration-700 group-hover:border-b-orange-500 group-hover:border-l-apple-500 group-hover:border-r-orange-500 group-hover:border-t-apple-500 group-hover:[transform:rotateY(180deg)] sm:size-32 lg:size-36">
        <img
          src={data.image}
          alt={data.text}
          className="mx-auto block w-full"
        />
      </div>
      <div className="relative mx-auto rounded-xl bg-black/70 p-2 text-white sm:text-sm md:text-base">
        {data.text}
      </div>
    </Link>
  );
}

CategoryItem.propTypes = {
  data: propTypes.object,
};

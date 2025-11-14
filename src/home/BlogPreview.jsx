import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogPreviewCard from "./BlogPreviewCard";
import { H2 } from "../ui/Heading";
import { BlogData } from "../assets/blogData";

function BlogPreview() {
  const settings = {
    arrows: false,

    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    className: "blog-review",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-14">
      <H2>From Our Blog</H2>
      <Slider {...settings}>
        {BlogData.slice(4, 7).map((blog) => (
          <BlogPreviewCard data={blog} key={blog.id} />
        ))}
      </Slider>
    </div>
  );
}

export default BlogPreview;

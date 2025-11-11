import propTypes from "prop-types";
import { useState } from "react";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { combinedBlogData } from "../assets2/blogData";
import { Link } from "react-router-dom";

export default function BlogAside() {
  return (
    <>
      <div className="hidden basis-1/4 flex-col gap-4 xl:flex 2xl:basis-1/5">
        <BlogAsideSection
          data={combinedBlogData.slice(5, 7)}
          sectionTitle="Popular Articles"
        />
        <BlogAsideSection
          data={combinedBlogData.slice(1, 3)}
          sectionTitle="Recent Articles"
        />
      </div>
      <div className="flex flex-col gap-4 xl:hidden">
        <BlogAsideSection
          data={combinedBlogData.slice(0, 2)}
          sectionTitle="Popular Articles"
        />
        <BlogAsideSection
          data={combinedBlogData.slice(3, 5)}
          sectionTitle="Recent Articles"
        />
      </div>
    </>
  );
}

function BlogAsideSection({ data, sectionTitle }) {
  return (
    <div className="overflow-hidden rounded-2xl border-[1px] border-gray-300 bg-white">
      <h2 className="border-b-[1px] border-gray-300 px-4 py-3 capitalize">
        {sectionTitle}
      </h2>
      <ul className="flex flex-col gap-3 p-4">
        {data.map((el, key) => (
          <BlogAsideSectionItem data={el} key={key} />
        ))}
      </ul>
    </div>
  );
}

function BlogAsideSectionItem({ data, dropdown }) {
  const { id, blogImage, blogHeading, blogDate } = data;

  return (
    <li className={`flex ${dropdown ? "first:pt-3 last:pb-3" : ""}`}>
      <img src={blogImage} alt="post image" className="size-16 rounded-2xl" />
      <div className="ml-3">
        <Link
          to={`/blog-view/${id}`}
          className="line-clamp-1 cursor-pointer text-sm text-gray-900 hover:text-apple-500"
        >
          {blogHeading}
        </Link>
        <p className="mt-1 text-sm">{blogDate}</p>
      </div>
    </li>
  );
}

function MobileDropDown({ data }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { sectionTitle, sectionItems } = data;
  const renderItems = sectionItems.map((el, key) => (
    <BlogAsideSectionItem data={el} key={key} dropdown={true} />
  ));

  return (
    <div className="overflow-hidden rounded-2xl border-[1px] border-gray-300 bg-white">
      <Menu>
        <MenuHandler>
          <div className="border-b-[1px] border-gray-300">
            <ListItem
              className="flex items-center justify-between gap-2 rounded-none bg-transparent p-2 font-medium text-gray-900 transition-none hover:bg-transparent focus:bg-transparent active:bg-transparent"
              selected={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <span className="uppercase">{sectionTitle}</span>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform xl:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
      </Menu>
      <div className="xl:hidden">
        <Collapse open={isMobileMenuOpen} className="flex flex-col gap-3 px-3">
          {renderItems}
        </Collapse>
      </div>
    </div>
  );
}

////////////////////////////////////
///        propTypes

BlogAsideSectionItem.propTypes = {
  data: propTypes.object,
  dropdown: propTypes.bool,
};
BlogAsideSection.propTypes = {
  data: propTypes.array,
  sectionTitle: propTypes.string,
};
MobileDropDown.propTypes = {
  data: propTypes.object,
};

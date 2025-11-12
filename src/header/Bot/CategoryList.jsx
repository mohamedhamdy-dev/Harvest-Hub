import { List } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

export default function CategoryList({ data, onClose }) {
  const { categoryItem, categoryLink, items } = data;

  return (
    <List className="min-w-0 bg-white pt-0 hover:bg-none">
      <ul>
        {/* Cateogroy  */}
        <li className="mb-1">
          <NavLink
            onClick={onClose}
            to={categoryLink}
            className="block w-full cursor-pointer rounded-none border-b-2 border-gray-200 p-1 capitalize text-gray-900 hover:bg-white hover:text-green-500"
          >
            {categoryItem}
          </NavLink>
        </li>
        {/* Rest of Items  */}
        {items?.map(({ itemTitle, itemLink }) => (
          <li key={itemTitle}>
            <NavLink
              onClick={onClose}
              to={itemLink}
              className="block w-full p-1 text-sm capitalize text-gray-700 hover:bg-white hover:text-apple-500"
            >
              {itemTitle}
            </NavLink>
          </li>
        ))}
      </ul>
    </List>
  );
}

CategoryList.propTypes = {
  data: propTypes.object,
  onClose: propTypes.func,
};

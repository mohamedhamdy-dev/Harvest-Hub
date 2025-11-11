import { NavLink } from "react-router-dom";
import NestedNavMenu from "./NestedNavMenu";
import { useSelector } from "react-redux";
import propTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function NavList({ setOpenNav, type }) {
  const { user } = useSelector((state) => state.auth);
  const { t } = useTranslation("header");
  const role = user?.role;

  function handleClose() {
    if (type === "desktop") return;
    setOpenNav(false);
  }

  return (
    <nav>
      <ul className="flex min-w-[240px] select-none flex-col gap-4 px-4 py-4 font-sans text-base font-normal text-blue-gray-700 lg:flex-row lg:items-center lg:gap-7 lg:px-0 lg:py-2">
        <li>
          <NavLink
            onClick={handleClose}
            to="/"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            {t("bot.links.home")}
          </NavLink>
        </li>
        {(role === "merchant" || role === "customer" || role === "admin") && (
          <li>
            <NestedNavMenu
              handlerText={t("bot.links.store")}
              onClose={handleClose}
            />
          </li>
        )}

        {role === "admin" && (
          <li>
            <NavLink
              onClick={handleClose}
              to="dashboard/products-dashboard"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              {t("bot.links.dashboard")}
            </NavLink>
          </li>
        )}

        {(role === "merchant" || role === "customer" || role === "admin") && (
          <li>
            <NavLink
              onClick={handleClose}
              to="blog"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              {t("bot.links.blog")}
            </NavLink>
          </li>
        )}

        {(role === "merchant" || role === "customer" || role === "admin") && (
          <li>
            <NavLink
              onClick={handleClose}
              to="monitor/field-details"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              {t("bot.links.monitor")}
            </NavLink>
          </li>
        )}

        {(role === "merchant" || role === "customer" || role === "admin") && (
          <li>
            <NavLink
              onClick={handleClose}
              to="auctions/list"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              {t("bot.links.auction")}
            </NavLink>
          </li>
        )}
        {role === "admin" && (
          <li>
            <NavLink
              onClick={handleClose}
              to="control-center/manage-users"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              {t("bot.links.controlCenter")}
            </NavLink>
          </li>
        )}
        {(role === "merchant" || role === "admin") && (
          <li>
            <NavLink
              onClick={handleClose}
              to="manage-products"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              {t("bot.links.manageProducts")}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

NavList.propTypes = {
  setOpenNav: propTypes.func,
  type: propTypes.string,
};

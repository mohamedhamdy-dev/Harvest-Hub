import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  InboxArrowDownIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";

import propTypes from "prop-types";
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    path: "profile/basic-info",
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    path: "#inbox",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    path: "/",
  },
];

export default function ProfileMenu({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  function closeMenu(label) {
    if (label === "Sign Out") dispatch(logout());
    setIsMenuOpen(false);
  }

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-start">
      <MenuHandler>
        <button
          type="button"
          className="flex w-fit items-center gap-2 self-center rounded-full border border-gray-500 pr-2 text-sm outline-none duration-500 ltr:flex-row rtl:flex-row-reverse"
        >
          <img className="size-12 rounded-full" src={`${data.image}`} />
          <p className="cursor text-base duration-500">{data.name}</p>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, path }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <NavLink to={path} key={key}>
              <MenuItem
                onClick={() => closeMenu(label)}
                className={`flex items-center gap-2 rounded text-gray-900 ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </NavLink>
          );
        })}
      </MenuList>
    </Menu>
  );
}
ProfileMenu.propTypes = { data: propTypes.object };

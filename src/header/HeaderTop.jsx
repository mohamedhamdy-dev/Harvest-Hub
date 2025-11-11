import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function HeaderTop() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { t } = useTranslation("header");

  function changeLanguage(lng) {
    i18next.changeLanguage(lng);

    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  }

  return (
    <div className="bg-[#e4e4e7]/80 py-1">
      <div className="container mx-auto flex items-center justify-between text-xs sm:px-3">
        <div className="hidden text-sm text-gray-600 md:block">
          {t("top.text")}
        </div>

        <div className="mx-auto flex justify-between gap-2 md:mx-0">
          {/* My Account */}
          <div>
            {!isAuthenticated && (
              <Menu placement="bottom-start">
                <MenuHandler>
                  <span className="flex cursor-pointer p-1 text-gray-600 hover:text-gray-900 focus:text-gray-900 ltr:flex-row rtl:flex-row-reverse">
                    <UserIcon className="relative bottom-[2px] mr-1 inline-block size-4" />
                    <span className="text-sm">{t("top.account.text")}</span>
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className="relative bottom-[1px] ml-1 inline-block size-4"
                    />
                  </span>
                </MenuHandler>
                <MenuList className="left-0 min-w-32 border-b-2 border-b-apple-500">
                  <ul className="outline-none">
                    <li className="group cursor-pointer outline-none">
                      <NavLink
                        to="account/signin"
                        className="block px-0 py-1 outline-none group-hover:text-apple-500"
                      >
                        {t("top.account.signIN")}
                      </NavLink>
                    </li>
                    <li className="group cursor-pointer outline-none">
                      <NavLink
                        to="account/register"
                        className="block px-0 py-1 outline-none group-hover:text-apple-500"
                      >
                        {t("top.account.signUP")}
                      </NavLink>
                    </li>
                  </ul>
                </MenuList>
              </Menu>
            )}
          </div>
          {/* Language */}
          <div>
            <Menu placement="bottom-start">
              <MenuHandler>
                <span className="flex cursor-pointer items-center justify-center p-1 text-gray-600 hover:text-gray-900 focus:text-gray-900 ltr:flex-row rtl:flex-row-reverse">
                  <span className="text-sm">{t("top.language.text")}</span>
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className="relative bottom-[1px] ml-1 inline-block size-4"
                  />
                </span>
              </MenuHandler>
              <MenuList className="left-0 min-w-32 border-b-2 border-b-apple-500">
                <ul className="outline-none">
                  <li className="group cursor-pointer px-0 py-1 outline-none">
                    <button
                      onClick={() => changeLanguage("en")}
                      className="outline-none group-hover:text-apple-500"
                    >
                      <img
                        src="/languages/english.jpg"
                        alt="english icon"
                        className="relative bottom-[1px] inline-block"
                      />
                      <span className="ml-2 inline-block">
                        {t("top.language.en")}
                      </span>
                    </button>
                  </li>
                  <li className="group cursor-pointer px-0 py-1 outline-none">
                    <button
                      onClick={() => changeLanguage("ar")}
                      className="outline-none group-hover:text-apple-500"
                    >
                      <img
                        src="/languages/arabic.jpg"
                        alt="arabic icon"
                        className="relative bottom-[1px] inline-block"
                      />
                      <span className="ml-2 inline-block">
                        {t("top.language.ar")}
                      </span>
                    </button>
                  </li>
                </ul>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;

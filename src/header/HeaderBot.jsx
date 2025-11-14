import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "./bot/NavList";
import { CropAndFreshProducts } from "../assets/freshProduces";
import { DairyAndLivestockProducts } from "../assets/dairyLivestock";
import { SeedAndSaplingProducts } from "../assets/seedsSaplings";
// import { cropSprayingEquipment } from "../assets/cropSprayingEquipment";
// import { soilCropMonitoring } from "../assets/soilCropMonitoring";
// import { storageProcessing } from "../assets/storageProcessing";

function HeaderBot() {
  const [openNav, setOpenNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = [
      ...CropAndFreshProducts,
      ...DairyAndLivestockProducts,
      ...SeedAndSaplingProducts,
      // ...cropSprayingEquipment,
      // ...soilCropMonitoring,
      // ...storageProcessing,
    ].filter((item) =>
      item?.productName?.toLowerCase()?.includes(searchTerm?.toLowerCase()),
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  }, [searchTerm]);

  const handleSuggestionClick = (product) => {
    setSearchTerm("");
    setShowSuggestions(false);
    navigate(`product-details/${product.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filteredSuggestions.length > 0) {
      handleSuggestionClick(filteredSuggestions[0]); // default to first
    }
  };

  return (
    <div className="border-t-2 border-t-gray-200 bg-white">
      <div className="container mx-auto px-2 sm:px-3">
        <div className="grid max-w-none grid-cols-[auto_auto] grid-rows-[auto_auto] justify-between rounded-none px-0 py-1 shadow-none lg:flex lg:flex-wrap xl:grid">
          {/* left top */}
          <div className="col-span-1 col-start-1 row-span-1 row-start-1">
            <div className="flex items-center text-blue-gray-900">
              <div className="hidden lg:block">
                <NavList type="desktop" />
              </div>
              <IconButton
                variant="text"
                className="text-gray-600 lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="size-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="size-6" strokeWidth={2} />
                )}
              </IconButton>
            </div>
          </div>

          {/* center bot */}
          <div className="col-span-2 row-start-2">
            <Collapse open={openNav}>
              <NavList
                className="absolute"
                type="mobile"
                setOpenNav={setOpenNav}
              />
            </Collapse>
          </div>

          {/* right top */}
          <div className="relative col-span-1 col-start-2 row-span-1 row-start-1 max-h-12 self-center">
            <div className="flex items-center text-xs">
              <form
                className="relative flex items-center ltr:flex-row rtl:flex-row-reverse"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => searchTerm && setShowSuggestions(true)}
                  placeholder="Search"
                  className="rounded-l-full bg-gray-100 px-4 py-[10px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-apple-500 md:w-64"
                />
                <button
                  type="submit"
                  className="rounded-r-full bg-apple-500 p-[10px] uppercase text-white duration-300 hover:bg-black"
                >
                  <span className="relative top-[1px]">Search</span>
                </button>

                {showSuggestions && filteredSuggestions.length > 0 && (
                  <ul className="absolute left-0 top-full z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-md">
                    {filteredSuggestions.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleSuggestionClick(item)}
                        className="flex cursor-pointer items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        <img
                          src={item.productImage}
                          alt={item.productName}
                          className="h-8 w-8 rounded object-cover"
                        />
                        <span>{item.productName}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBot;

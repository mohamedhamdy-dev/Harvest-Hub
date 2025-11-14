import FilterBy from "../../shared/FilterBy";
import BreadCrumb from "../../shared/BreadCrumb";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../../shared/ProductCard";
import { Select, Option } from "@material-tailwind/react";
import { AiOutlineProduct } from "react-icons/ai";
import { useParams } from "react-router-dom";

import { CropAndFreshProducts } from "../../assets/freshProduces";
import { DairyAndLivestockProducts } from "../../assets/dairyLivestock";
import { SeedAndSaplingProducts } from "../../assets/seedsSaplings";
import { soilCropMonitoring } from "../../assets/soilCropMonitoring";
import { cropSprayingEquipment } from "../../assets/cropSprayingEquipment";
import { storageProcessing } from "../../assets/storageProcessing";

function fetchData(dataCategory) {
  switch (dataCategory) {
    case "crop-fresh-produce":
      return CropAndFreshProducts;
    case "seeds-and-saplings":
      return SeedAndSaplingProducts;
    case "dairy-and-livestock":
      return DairyAndLivestockProducts;
    case "soil-and-crop-monitoring":
      return soilCropMonitoring;
    case "crop-spraying-equipment":
      return cropSprayingEquipment;
    case "storage-and-processing ":
      return storageProcessing;
    case "agricultural-products":
      return [
        ...CropAndFreshProducts,
        ...DairyAndLivestockProducts,
        ...SeedAndSaplingProducts,
      ];
    case "farming-technology":
      return [
        ...soilCropMonitoring,
        ...cropSprayingEquipment,
        ...storageProcessing,
      ];
  }
}

function ProductListPage() {
  const [itemOffset, setItemOffset] = useState(0);
  const { type } = useParams();
  const itemsPerPage = 8;

  ////////////////////////////////////////////
  /////////////// Mocking Data Fetch /////////

  const data = fetchData(type);

  /////////////////////////////////////////////

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;

    setItemOffset(newOffset);
  };

  return (
    <main className="pt-12">
      {/* <BreadCrumb /> */}
      <BreadCrumb />
      <div className="container mx-auto px-2">
        <div className="flex gap-3">
          <div className="hidden lg:block">
            <FilterBy />
          </div>
          <div className="flex w-full flex-col justify-between">
            <div>
              <div className="mb-3 flex flex-col justify-between gap-4 rounded-2xl border-[1px] border-gray-300 bg-white px-3 py-2 sm:flex-row sm:items-center">
                <div className="flex items-center gap-1">
                  <div className="rounded-full border-gray-200 bg-apple-500 p-1 text-white outline-none">
                    <AiOutlineProduct className="size-6 stroke-1" />
                  </div>

                  <p className="text-sm text-gray-600">
                    There are {data.length} products
                  </p>
                </div>

                <SortSelect />
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {currentItems &&
                  currentItems.map((item, key) => (
                    <ProductCard
                      imgClassName="2xl:size-[12.1rem] lg:size-[12rem]"
                      data={item}
                      key={key}
                    />
                  ))}
              </div>
            </div>

            <div className="">
              <ReactPaginate
                pageRangeDisplayed={5}
                breakLabel="..."
                nextLabel="Next →"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="← Prev"
                renderOnZeroPageCount={null}
                className="mt-3 flex items-center justify-center gap-1 rounded-3xl border-[1px] border-gray-300 bg-white py-1 sm:gap-4"
                pageClassName="rounded-full overflow-hidden  hover:text-apple-500"
                pageLinkClassName="size-8 sm:size-10 sm:p-1 flex justify-center items-center text-xs"
                activeClassName="bg-apple-500 text-white hover:text-white"
                previousClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
                nextClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
                previousLinkClassName="sm:px-6 sm:py-3 py-2 px-2 block uppercase"
                nextLinkClassName="sm:px-6 sm:py-3 py-2  px-2 block uppercase"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductListPage;

function SortSelect() {
  const [sort, setSort] = useState("Best Sellers");
  return (
    <div className="w-48 md:w-72">
      <Select
        onChange={(value) => setSort(value)}
        // value="Best Sellers"
        value={sort}
        className="rounded-md border-[1px] border-gray-300 p-0 text-sm text-gray-900"
        label="Sort By:"
        labelProps={{
          className:
            "before:hidden top-0 items-center  after:hidden -left-14 text-gray-700 text-sm leading-normal",
        }}
        containerProps={{
          className: "h-8",
        }}
      >
        <Option className="text-xs" value="Best Sellers">
          Best Sellers
        </Option>
        <Option className="text-xs" value="Name, A to Z">
          Name, A to Z
        </Option>
        <Option className="text-xs" value="Name, Z to A">
          Name, Z to A
        </Option>
        <Option className="text-xs" value="Price, Low to High">
          Price, Low to High
        </Option>
        <Option className="text-xs" value="Price, High to Low">
          Price, High to Low
        </Option>
      </Select>
    </div>
  );
}

import ReactPaginate from "react-paginate";
import { useState } from "react";
import { userBidsFromApi } from "../assets2/userAuctionData";
import { MyBidCard } from "./MyBidCard";

export default function MyBidsPage() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = userBidsFromApi.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userBidsFromApi.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userBidsFromApi.length;
    setItemOffset(newOffset);
  };

  if (userBidsFromApi.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-2xl bg-white lg:h-[500px]">
        <p className="text-2xl text-gray-900">You Have No Bids</p>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-4 text-2xl font-bold text-white">My Active Bids</h3>

      <div className="auction-scroll grid grid-cols-1 items-center gap-4 p-0 md:grid-cols-2 md:p-4 lg:h-[500px] lg:grid-cols-3">
        {currentItems.map((auction) => (
          <MyBidCard key={auction.id} data={auction} />
        ))}
      </div>

      <ReactPaginate
        pageRangeDisplayed={5}
        breakLabel="..."
        nextLabel="Next →"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="← Prev"
        renderOnZeroPageCount={null}
        className="mt-3 flex items-center justify-center gap-1 rounded-3xl border-[1px] border-gray-300 bg-white py-1 sm:gap-4"
        pageClassName="rounded-full overflow-hidden hover:text-apple-500"
        pageLinkClassName="size-8 sm:size-10 sm:p-1 flex justify-center items-center text-xs"
        activeClassName="bg-apple-500 text-white hover:text-white"
        previousClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        nextClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        previousLinkClassName="sm:px-6 sm:py-3 py-2 px-2 block uppercase"
        nextLinkClassName="sm:px-6 sm:py-3 py-2  px-2 block uppercase"
      />
    </>
  );
}

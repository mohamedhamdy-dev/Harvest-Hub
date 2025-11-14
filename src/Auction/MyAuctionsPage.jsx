import ReactPaginate from "react-paginate";
import { myAuctionFromApi } from "../assets/userAuctionData";
import MyAuctionCard from "./MyAuctionCard";
import { useState } from "react";

export default function MyAuctionsPage() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = myAuctionFromApi.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(myAuctionFromApi.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % myAuctionFromApi.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-white">My Auctions</h2>

      <div className="auction-scroll grid grid-cols-1 items-center gap-6 p-2 pr-3 lg:h-[600px] lg:grid-cols-3 2xl:h-[500px]">
        {currentItems.map((auction) => (
          <MyAuctionCard key={auction.id} auction={auction} />
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
        pageClassName="rounded-full overflow-hidden  hover:text-apple-500"
        pageLinkClassName="size-8 sm:size-10 sm:p-1 flex justify-center items-center text-xs"
        activeClassName="bg-apple-500 text-white hover:text-white"
        previousClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        nextClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        previousLinkClassName="sm:px-6 sm:py-3 py-2 px-2 block uppercase"
        nextLinkClassName="sm:px-6 sm:py-3 py-2  px-2 block uppercase"
      />
    </div>
  );
}

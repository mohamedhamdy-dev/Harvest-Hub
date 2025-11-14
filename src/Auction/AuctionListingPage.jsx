// import { auctions } from "../assets/AuctionStaticData";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { getActiveAuctions } from "../utils/helpers";
import { AuctionData } from "../assets/auctionData";
import AuctionCard from "./AuctionCard";

export default function AuctionListingsPage() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  // const LiveAuctionsData = getActiveAuctions(AuctionData);
  const LiveAuctionsData = AuctionData;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = LiveAuctionsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(LiveAuctionsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % LiveAuctionsData.length;

    setItemOffset(newOffset);
  };

  if (LiveAuctionsData.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-2xl bg-white lg:h-[500px]">
        <p className="text-2xl text-gray-900">
          Sorry , No Active Auctions Right Now{" "}
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-4 text-2xl font-bold text-white">Live Auctions</h3>

      <div className="auction-scroll grid grid-cols-1 items-center gap-4 p-4 lg:h-[500px] lg:grid-cols-3">
        {currentItems?.map((auction) => (
          <AuctionCard key={auction.id} data={auction} />
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
    </>
  );
}

import { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";
import { formatDate } from "../utils/helpers";
import AuctionModal from "./AuctionModal";

MyAuctionCard.propTypes = {
  auction: propTypes.object,
};

export default function MyAuctionCard({ auction }) {
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [modalType, setModalType] = useState(null);
  const modalRef = useRef(null);

  const openModal = (auction, type) => {
    setSelectedAuction(auction);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedAuction(null);
    setModalType(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (selectedAuction) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedAuction]);

  return (
    <>
      <div className="flex flex-col rounded-2xl border bg-white p-5 md:flex-row lg:flex-col">
        <div className="flex items-center justify-center">
          <img
            src={auction.images[0]}
            className="size-60"
            alt={auction.title}
          />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {auction.title}
            </h3>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                auction.status === "Live"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {auction.status}
            </span>
          </div>

          <p className="text-sm text-gray-900">
            Highest Bid: {auction.highestBid}
          </p>
          <p className="text-sm text-gray-900">Bids: {auction.bids}</p>

          <div className="text-sm text-gray-900">
            <p>
              <span className="mr-1 text-green-800">From:</span>
              {formatDate(auction.startTime)}
            </p>
            <p>
              <span className="mr-1 text-green-800">Until:</span>
              {formatDate(auction.endTime)}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-start gap-3 lg:h-24 xl:h-auto">
            {auction.status !== "Ended" && (
              <button
                className="rounded-md bg-red-500 px-4 py-1.5 text-white hover:bg-red-600"
                onClick={() => openModal(auction, "delete")}
              >
                Delete
              </button>
            )}
            <button
              className="rounded-md bg-blue-500 px-4 py-1.5 text-white hover:bg-blue-600"
              onClick={() => openModal(auction, "result")}
            >
              View Result
            </button>
            <button
              className="rounded-md bg-green-500 px-4 py-1.5 text-white hover:bg-green-600"
              onClick={() => openModal(auction, "edit")}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <AuctionModal
        selectedAuction={selectedAuction}
        modalType={modalType}
        modalRef={modalRef}
        closeModal={closeModal}
      />
    </>
  );
}

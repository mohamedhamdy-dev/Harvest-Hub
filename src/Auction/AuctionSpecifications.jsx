import { useEffect, useRef, useState } from "react";
import { CountdownTimer } from "../shared/CountdownTimer";
import propTypes from "prop-types";
import { GiPayMoney } from "react-icons/gi";
import BidConfirmationModal from "./BidConfirmationModal";

export function AuctionSpecifications({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [bid, setBid] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { id, title, currentBid, endTime, description } = data;

  const handlePlaceBidClick = () => {
    if (!phone || !email || !bid) {
      alert("Please fill all fields before placing your bid.");
      return;
    }

    setIsModalOpen(true);
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="dark:bg-zinc-900 mx-auto max-w-2xl space-y-6 rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
          {title}
        </h1>

        <div className="text-lg text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Current Bid:</span> {currentBid}
        </div>

        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <span className="font-medium">⏳ Time Left:</span>
          <CountdownTimer endTime={endTime} />
        </div>

        <textarea
          className="dark:border-zinc-700 dark:bg-zinc-800 h-28 w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none dark:text-white"
          disabled
          value={description}
        />

        <div className="flex items-center gap-2">
          <label className="block w-1/2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone Number
            <input
              type="tel"
              className="dark:border-zinc-700 dark:bg-zinc-800 mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label className="block w-1/2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
            <input
              type="email"
              className="dark:border-zinc-700 dark:bg-zinc-800 mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Bid (EGP)
          <input
            type="number"
            className="dark:border-zinc-700 dark:bg-zinc-800 mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
            placeholder="Enter your bid"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
          />
        </label>

        <button
          onClick={handlePlaceBidClick}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-black"
        >
          <GiPayMoney className="size-6" />
          <>Place Bid</>
        </button>
      </div>
      <BidConfirmationModal
        modalRef={modalRef}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
}

AuctionSpecifications.propTypes = { data: propTypes.object };

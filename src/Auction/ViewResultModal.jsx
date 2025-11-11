import propTypes from "prop-types";
import { FaCrown } from "react-icons/fa";

ViewResultModal.propTypes = {
  selectedAuction: propTypes.object,
};

export default function ViewResultModal() {
  //  function ViewResultModal({ selectedAuction }) {
  const selectedAuction = {
    title: "Tractor Model X",
    highestBid: "$1,200",
    bids: 14,
    endTime: "2025-06-19T17:30:00Z",
    winner: {
      name: "John Doe",
      email: "john@example.com",
    },
  };

  const { title, highestBid, bids, endTime, winner } = selectedAuction;
  return (
    <div className="mx-auto w-full max-w-md space-y-5 rounded-2xl bg-white p-6 text-gray-800 shadow-xl">
      <h2 className="border-b pb-2 text-center text-2xl font-bold text-gray-800">
        {title}
      </h2>

      {/* Winner Section */}
      <div className="flex items-start gap-3 rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-4">
        <FaCrown className="mt-1 text-2xl text-yellow-500" />
        <div>
          <p className="text-sm text-gray-500">Winner</p>
          <p className="text-lg font-semibold text-yellow-700">
            {winner?.name || "Unknown"}
          </p>
          <p className="text-sm text-gray-600">Email: {winner?.email}</p>
        </div>
      </div>

      {/* Auction Info */}
      <div className="space-y-2 text-sm">
        <p>
          <strong>Highest Bid:</strong>{" "}
          <span className="text-green-600">{highestBid}</span>
        </p>
        <p>
          <strong>Total Bids:</strong> {bids}
        </p>
        <p>
          <strong>Ended On:</strong> {new Date(endTime).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

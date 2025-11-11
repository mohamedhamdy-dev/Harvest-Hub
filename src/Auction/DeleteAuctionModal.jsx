import propTypes from "prop-types";
import { FiAlertTriangle } from "react-icons/fi";

DeleteAuctionModal.propTypes = {
  closeModal: propTypes.func,
};

export default function DeleteAuctionModal({ closeModal }) {
  //  function DeleteModal({ closeModal, selectedAuction }) {

  return (
    <div className="mx-auto w-full max-w-sm space-y-4 rounded-2xl bg-white p-6 text-center shadow-xl">
      <div className="flex justify-center text-4xl text-red-500">
        <FiAlertTriangle />
      </div>

      <h2 className="text-xl font-semibold text-gray-800">Delete Auction?</h2>

      <p className="text-sm text-gray-600">
        Are you sure you want to permanently delete the auction{" "}
        <strong className="text-red-600">AuctionName</strong>?<br />
        This action cannot be undone.
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={closeModal}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          // onClick={onDelete}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

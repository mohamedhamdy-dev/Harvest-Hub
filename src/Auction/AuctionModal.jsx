import { motion, AnimatePresence } from "framer-motion";
import propTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import DeleteAuctionModal from "./DeleteAuctionModal";
import EditAuctionModal from "./EditAuctionModal";
import ViewResultModal from "./ViewResultModal";

AuctionModal.propTypes = {
  selectedAuction: propTypes.object,
  modalType: propTypes.string,
  modalRef: propTypes.object,
  closeModal: propTypes.func,
};

export default function AuctionModal({
  selectedAuction,
  modalType,
  modalRef,
  closeModal,
}) {
  return (
    <AnimatePresence>
      {selectedAuction && modalType && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className={`relative w-full rounded-lg p-6 ${
              modalType === "result"
                ? "max-w-md bg-gradient-to-r from-indigo-500 to-blue-500"
                : modalType === "edit"
                  ? "max-w-4xl bg-gradient-to-br from-emerald-800 to-emerald-600/90"
                  : "max-w-md bg-gradient-to-r from-red-500 to-orange-500"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
              },
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              transition: { duration: 0.2 },
            }}
          >
            <h2 className="mb-4 text-xl font-bold text-white">
              {modalType === "edit"
                ? "Edit Auction"
                : modalType === "result"
                  ? "Auction Result"
                  : "Delete Auction"}
            </h2>

            {modalType === "result" && (
              <ViewResultModal selectedAuction={selectedAuction} />
            )}

            {modalType === "edit" && (
              <EditAuctionModal
                selectedAuction={selectedAuction}
                closeModal={closeModal}
              />
            )}

            {modalType === "delete" && (
              <DeleteAuctionModal
                selectedAuction={selectedAuction}
                closeModal={closeModal}
              />
            )}

            <button
              onClick={closeModal}
              className="absolute right-3 top-3 text-sm duration-300 hover:rotate-180"
            >
              <XMarkIcon className="w-7 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

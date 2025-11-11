import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IoPerson } from "react-icons/io5";

export default function BidConfirmationModal({
  modalRef,
  closeModal,
  isModalOpen,
}) {
  const bidData = {
    title: "Product A Model X",
    pid: "1231",
    bidAmount: 5000,
    phone: "01022734564",
    email: "leou@helwan.com",
  };

  const { title, pid, bidAmount, phone, email } = bidData;
  const userName = "LeoU";

  function confirmBid() {
    //   const bidPayload = {
    //     pid: id,
    //     bidAmount: bid,
    //     phone,
    //     email,
    //   };

    closeModal();
  }

  return (
    isModalOpen && (
      <AnimatePresence>
        {
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="relative w-full max-w-md rounded-lg bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 p-6"
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
              <h2 className="mb-4 text-xl font-bold text-white">Confirm Bid</h2>

              <>
                <div className="mx-auto w-full max-w-md space-y-5 rounded-2xl bg-white p-6 text-gray-800 shadow-xl">
                  <h2 className="border-b pb-2 text-center text-2xl font-bold text-gray-800">
                    {title}
                  </h2>

                  {/* Winner Section */}
                  <div className="flex items-start gap-3 rounded-xl border-l-4 border-green-400 bg-green-50 p-4">
                    <IoPerson className="mt-1 text-2xl text-green-800" />
                    <div>
                      <p className="text-lg font-semibold text-green-800">
                        {userName || "Unknown"}
                      </p>
                      <p className="text-sm text-gray-600">Email: {email}</p>
                      <p className="text-sm text-gray-600">Phone: {phone}</p>
                    </div>
                  </div>

                  {/* Auction Info */}
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Bid Amount:</strong>{" "}
                      <span className="text-green-600">{bidAmount}</span>
                    </p>
                  </div>

                  <div className="mb-3 text-center text-sm text-gray-600">
                    <p>Are you sure you want to place this bid?</p>
                    <p>
                      This action is{" "}
                      <strong className="text-red-600">irreversible</strong>.
                    </p>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => closeModal()}
                      className="rounded-full bg-red-500 px-5 py-2 text-sm text-white transition hover:bg-black"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmBid}
                      className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white duration-300 hover:bg-black"
                    >
                      Confirm
                    </button>
                  </div>

                  <p className="mb-6 text-right text-sm text-green-800 duration-300 hover:text-black">
                    <Link
                      href="/bidding-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bidding Policy
                    </Link>
                  </p>
                </div>
              </>

              <button
                onClick={closeModal}
                className="absolute right-3 top-3 text-sm text-blue-600 duration-300 hover:rotate-180"
              >
                <XMarkIcon className="w-7 text-white" />
              </button>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    )
  );
}

BidConfirmationModal.propTypes = {
  modalRef: propTypes.func,
  closeModal: propTypes.func,
  isModalOpen: propTypes.bool,
};

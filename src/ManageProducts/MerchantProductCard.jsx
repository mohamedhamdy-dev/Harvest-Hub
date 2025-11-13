import { useState } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ImageUploader } from "../shared/ImageUploader";
import { FiAlertTriangle } from "react-icons/fi";

export default function MerchantProductCard({
  data,
  className,
  imgClassName = "",
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { id, rating, productImage, productName, discountPrice, price } = data;

  return (
    <>
      <div
        className={`flex h-full max-w-[312px] cursor-pointer flex-col items-center overflow-hidden rounded-[32px] border-2 bg-white lg:w-full ${className}`}
      >
        {/* image and stars  */}
        <div className="group relative flex flex-col items-center">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={`/product-details/${id}`}
            className={`max-h-[280] max-w-[280px] outline-none ${imgClassName}`}
          >
            <img
              src={productImage}
              alt="product"
              className="duration-300 group-hover:scale-110"
            />
          </Link>
          <Rating value={Math.round(rating)} readonly className={"z-10 my-1"} />
        </div>

        {/* text data and admin controls */}
        <div className="z-10 flex w-11/12 flex-col items-center gap-2 border-t-2 border-mercury-100 py-4">
          <div className="line-clamp-1 capitalize text-gray-900">
            {productName}
          </div>

          <div className="text-apple-500">
            {Number(discountPrice) !== 0 ? (
              <>
                {discountPrice}
                <span className="ml-1 text-sm text-gray-600 line-through">
                  {price}
                </span>
              </>
            ) : (
              <>{price}</>
            )}
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setShowEditModal(true)}
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-black"
            >
              Edit
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-black"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showEditModal && (
          <EditModal
            product={data}
            onClose={() => setShowEditModal(false)}
            onSave={() => console.log("Save logic here")}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showDeleteModal && (
          <DeleteModal
            productName={data.productName}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={() => {
              console.log("Deleted:", data.id);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function EditModal({ product, onClose, onSave }) {
  const { productName, price, discountPrice } = product;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="relative z-10 w-[90%] max-w-4xl rounded-2xl bg-white bg-gradient-to-r from-indigo-500 to-blue-500 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-xl font-semibold text-white">Edit Product</h2>
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Left Side - Image & Upload */}
          <div className="flex flex-1 flex-col items-center">
            <ImageUploader />
            <div className="mt-4 w-full rounded-2xl bg-white p-5">
              <label className="mb-1 block text-sm text-gray-700">
                Change Card Image
              </label>
              <input type="file" className="w-full text-sm" />
            </div>
          </div>

          {/* Right Side - Editable Fields */}
          <div className="flex-1 space-y-4 rounded-2xl bg-white p-5">
            <label className="block">
              <span className="text-gray-700">Product Name</span>
              <input
                type="text"
                defaultValue={productName}
                className="mt-1 w-full rounded-xl px-3 py-2 outline-none ring-2 ring-gray-600 focus:ring-blue-500"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Price</span>
              <input
                type="number"
                defaultValue={price}
                className="mt-1 w-full rounded-xl px-3 py-2 outline-none ring-2 ring-gray-600 focus:ring-blue-500"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Discount Price</span>
              <input
                type="number"
                defaultValue={discountPrice}
                className="mt-1 w-full rounded-xl px-3 py-2 outline-none ring-2 ring-gray-600 focus:ring-blue-500"
              />
            </label>

            <div className="pt-2 text-right">
              <button
                onClick={() => {
                  // Optional: call onSave()
                  onClose();
                }}
                className="rounded-full bg-blue-800 px-4 py-2 text-white duration-300 hover:bg-black"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl leading-none duration-300 hover:rotate-180"
        >
          <XMarkIcon className="w-7 text-white" />
        </button>
      </motion.div>
    </motion.div>
  );
}

EditModal.propTypes = {
  product: propTypes.object.isRequired,
  onClose: propTypes.func.isRequired,
  onSave: propTypes.func, // optional
};

function DeleteModal({ productName, onClose, onConfirm }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="relative z-10 w-[90%] max-w-md rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-2xl bg-white p-8">
          <div className="flex justify-center text-4xl text-red-500">
            <FiAlertTriangle />
          </div>

          <h2 className="text-xl font-semibold text-gray-800">
            Delete Auction?
          </h2>

          <p className="text-sm text-gray-600">
            Are you sure you want to permanently delete the Product{" "}
            <strong className="text-red-600">{productName}</strong>?<br />
            This action cannot be undone.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={onClose}
              className="rounded-lg border border-green-500 px-4 py-2 text-sm font-medium text-gray-900 duration-300 hover:bg-green-500 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-black"
            >
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

DeleteModal.propTypes = {
  productName: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
  onConfirm: propTypes.func.isRequired,
};

MerchantProductCard.propTypes = {
  data: propTypes.object.isRequired,
  className: propTypes.string,
  imgClassName: propTypes.string,
};

import { useState } from "react";
import propTypes from "prop-types";
import { ImageUploader } from "../shared/ImageUploader";

EditAuctionModal.propTypes = {
  closeModal: propTypes.func,
  selectedAuction: propTypes.object,
};

export default function EditAuctionModal({ closeModal, selectedAuction }) {
  const [form, setForm] = useState({
    title: selectedAuction.title,
    description: selectedAuction.description || "",
    price: selectedAuction.price || "",
    duration: selectedAuction.duration || "1",
  });
  const [images, setImages] = useState([]);

  const handleImageChange = (files) => {
    setImages(files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Auction updated!");
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex h-[450px] w-full flex-col gap-3 md:flex-row"
    >
      <div className="w-full md:w-1/2">
        <ImageUploader onImagesChange={handleImageChange} />
      </div>
      <div className="w-full rounded-2xl bg-white p-5 md:w-1/2">
        <div>
          <label htmlFor="title" className="mb-1 block text-sm font-medium">
            Item Name
          </label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Item Name"
            className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Brief item description"
            className="h-20 w-full resize-none rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="price" className="mb-1 block text-sm font-medium">
            Starting Price ($)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Starting Price"
            className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="duration" className="mb-1 block text-sm font-medium">
            Duration
          </label>
          <select
            id="duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="1">1 Day</option>
            <option value="3">3 Days</option>
            <option value="7">7 Days</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition duration-200 hover:bg-green-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

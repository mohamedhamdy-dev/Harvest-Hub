import CartPreview from "../cart/CartPreview";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import ProfileMenu from "./top/ProfileMenu";
import { useCart } from "../slices/cartSlice";
import { useSelector } from "react-redux";

export default function HeaderTop() {
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false);

  const { totalItemsInCart, totalCartPriceNumber, totalCartPriceCurrency } =
    useCart();
  const buttonRef = useRef(null);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-wrap justify-between sm:px-3">
        {/* left */}
        <div className="flex items-center p-1 py-4 sm:p-0 sm:py-2">
          {isAuthenticated ? (
            <ProfileMenu data={user} />
          ) : (
            <Link
              to={"account/signin"}
              className="group flex w-fit items-center gap-2 self-center rounded-full border border-apple-500 text-sm duration-500 hover:border-gray-500"
            >
              <div className="w-fit rounded-full bg-apple-500 p-2 duration-500 group-hover:bg-black">
                <UserIcon className="size-8 text-white" />
              </div>
              <p className="cursor pl-1 pr-4 text-base duration-500 group-hover:text-apple-500">
                login
              </p>
            </Link>
          )}
        </div>

        {/* middle  */}
        <div className="-order-1 flex w-1/2 basis-full items-end justify-center gap-1 p-4 md:-order-none md:w-1/3 md:basis-1/3 ltr:flex rtl:flex-row-reverse">
          <span className="text-4xl text-green-500">Harvest</span>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Harvest Hub Logo"
            className="w-20"
          ></img>
          <span className="text-4xl text-green-500">Hub</span>
        </div>

        {/* right */}
        <div className="relative flex w-fit items-center justify-end gap-2 p-1 py-4 sm:p-0 sm:py-2">
          <div
            ref={buttonRef}
            onClick={() => setIsCartPreviewOpen((state) => !state)}
            className="flex aspect-square cursor-pointer rounded-full bg-apple-500 p-2 duration-500 hover:bg-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="size-8 fill-white"
            >
              <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z"></path>
            </svg>
          </div>

          <div className="flex items-center justify-center text-xs md:text-sm ltr:flex-row rtl:flex-row-reverse">
            <span>
              {" "}
              {Number(totalCartPriceNumber) !== 0
                ? totalCartPriceNumber + " " + totalCartPriceCurrency
                : 0}
            </span>
            <span> - </span>
            <span>{totalItemsInCart} Items</span>
          </div>
          <CartPreview
            isCartPreviewOpen={isCartPreviewOpen}
            setIsCartPreviewOpen={setIsCartPreviewOpen}
            buttonRef={buttonRef}
          />
        </div>
      </div>
    </div>
  );
}

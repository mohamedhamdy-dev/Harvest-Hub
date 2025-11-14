import BreadCrumb from "../shared/BreadCrumb";
import { useCart } from "../slices/cartSlice";
import CartItem from "./CartItem";

export default function CartDetialsPage() {
  const { cart } = useCart();

  console.log(cart);

  return (
    <div className="container mx-auto mb-20 lg:h-[800px]">
      <BreadCrumb />

      <div className="mt-4 flex flex-col justify-between gap-4 px-2 lg:flex-row">
        <div className="basis-3/5 rounded-2xl border-[1px] border-gray-300 bg-white">
          <h2 className="border-b-[1px] border-gray-300 px-3 py-3 text-[20px] font-[500] text-gray-900">
            Shopping Cart
          </h2>
          <ul className="cart-scroll overflow-y-scroll lg:h-[600px]">
            {cart.length === 0 ? (
              <div className="relative h-64 overflow-hidden text-center text-xl text-green-500">
                <img
                  src={`${import.meta.env.BASE_URL}cart/cartBackground_800_650.jpg`}
                  className="absolute max-h-96 w-full"
                  alt="Empty Cart Background"
                />
                <p className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 text-nowrap text-2xl">
                  Your Cart is Empty
                </p>
              </div>
            ) : (
              cart.map((item) => <CartItem data={item} key={item.id} />)
            )}
          </ul>
        </div>
        <ActionAside />
      </div>
    </div>
  );
}

function ActionAside() {
  const { totalItemsInCart, totalCartPriceNumber, totalCartPriceCurrency } =
    useCart();

  return (
    <div className="h-fit basis-2/5 overflow-hidden rounded-2xl border-[1px] border-gray-300 bg-white">
      <div>
        <div className="flex justify-between border-b-[1px] border-gray-300 px-3 py-4">
          <span className="text-sm">{totalItemsInCart} items</span>
          <span>
            {totalCartPriceNumber > 0 ? (
              <>{Number(totalCartPriceNumber) + " " + totalCartPriceCurrency}</>
            ) : (
              0
            )}
          </span>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-300 px-3 py-4">
          <span className="text-sm">Total Price (tax incl.)</span>
          <span className="text-lg">
            {`${(totalCartPriceNumber + 0.14 * totalCartPriceNumber).toFixed(2)}`}
          </span>
        </div>
        <form className="py-4">
          <button className="mx-auto block rounded-full bg-apple-500 px-5 py-2 text-sm uppercase text-white duration-300 hover:bg-black">
            proceed to checkout
          </button>
        </form>
      </div>
    </div>
  );
}

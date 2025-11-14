import ProductImagePreview from "../shared/ProductImagePreview";
import { splitCommonPrefix } from "../utils/helpers";
import { Link, useParams } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { AuctionSpecifications } from "./AuctionSpecifications";
import { AuctionData } from "../assets/auctionData";

// AuctionDetailPage.jsx
export default function AuctionDetailPage() {
  const { id } = useParams();

  const auctionDetailsData = AuctionData.find((p) => p.id === Number(id));

  const images = {
    prefix: splitCommonPrefix(auctionDetailsData.images).prefix,
    variables: splitCommonPrefix(auctionDetailsData.images).variables,
  };

  return (
    <div className="container mx-auto my-10 mb-16 rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 p-5">
      <div className="mb-3">
        <Link
          to={"/auctions/list"}
          className="flex h-12 w-36 items-center justify-center gap-1 rounded-3xl bg-white px-2 py-1 text-green-900 duration-300 hover:bg-black hover:text-white"
        >
          <TbArrowBackUp className="size-6" />
          <span>Auction List</span>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <ProductImagePreview
          data={images}
          iconClassName="overflow-hidden rounded-2xl"
          imageClassName="overflow-hidden rounded-2xl  2xl:!w-[500px] "
        />
        <AuctionSpecifications data={auctionDetailsData} />
      </div>
    </div>
  );
}

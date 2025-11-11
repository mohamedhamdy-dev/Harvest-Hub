import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { CountdownTimer } from "../shared/CountdownTimer";

export default function AuctionCard({ data }) {
  return (
    <Link
      key={data.id}
      to={`/auctions/${data.id}`}
      className="flex flex-col items-center gap-2 rounded-xl border bg-white p-4 hover:shadow-xl md:flex-row lg:flex-col"
    >
      <div>
        <img
          src={data.images[0]}
          alt={data.title}
          className="h-[320px] w-[320px] rounded object-cover"
        />
      </div>
      <div>
        <div>
          <h2 className="line-clamp-1 text-lg font-semibold">{data.title}</h2>
          <p>Current Bid: {data.currentBid}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="">Time Left</p>
          <CountdownTimer endTime={data.endTime} />
        </div>
      </div>
    </Link>
  );
}

AuctionCard.propTypes = { data: propTypes.object };

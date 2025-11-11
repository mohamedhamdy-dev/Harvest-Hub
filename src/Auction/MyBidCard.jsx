import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { CountdownTimer } from "../shared/CountdownTimer";
import { extractNumericValue } from "../utils/helpers";

MyBidCard.propTypes = { data: propTypes.object };

export function MyBidCard({ data }) {
  //   const current = extractNumericValue(data.currentBid);
  const current = extractNumericValue(data.highestBid);
  const user = extractNumericValue(data.userBid);
  const now = new Date();
  const start = new Date(data.startTime);
  const end = new Date(data.endTime);

  const isLive = now >= start && now < end;
  const hasEnded = now >= end;
  const didWin = user >= current;

  let statusLabel = "Live";
  let statusColor = "bg-gradient-to-r from-green-500 to-lime-500";
  if (hasEnded) {
    if (didWin) {
      statusLabel = "Win";
      statusColor = "bg-gradient-to-r from-indigo-500 to-blue-500";
    } else {
      statusLabel = "Lose";
      statusColor = "bg-gradient-to-r from-pink-500 to-red-400";
    }
  }

  return (
    <Link
      to={`/auctions/${data.id}`}
      className="relative rounded-xl border bg-white p-4 hover:shadow-xl"
      onClick={(e) => {
        if (hasEnded) {
          e.preventDefault(); // block navigation
        }
      }}
    >
      <div>
        <img
          src={data.images[0]}
          alt={data.title}
          className="h-[320px] w-[320px] rounded object-cover"
        />
      </div>
      <div className="mt-3">
        <h2 className="line-clamp-1 text-lg font-semibold">{data.title}</h2>

        {isLive ? (
          <div className="flex items-center gap-2">
            <p className="text-sm">Time Left</p>
            <CountdownTimer endTime={data.endTime} />
          </div>
        ) : (
          <p className="text-sm italic text-gray-500">Auction Ended</p>
        )}

        <p
          className={`text-sm ${user < current ? "text-red-500" : "text-emerald-700"}`}
        >
          Your Bid: {data.userBid}
        </p>
        <p className="text-sm">Current Highest Bid: {data.highestBid}</p>

        <p
          className={`absolute right-2 top-2 flex aspect-square w-12 items-center justify-center rounded-2xl p-1 text-xs text-white ${statusColor}`}
        >
          {statusLabel}
        </p>
      </div>
    </Link>
  );
}

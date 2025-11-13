import { combinedAuctionData } from "./auctionData";

const myAuctions = [{ id: 1 }, { id: 2 }];

export const userBidsInDB = [
  {
    id: 1,
    userBid: "3,000 EGP",
  },
  {
    id: 2,
    userBid: "750 EGP", // outbid
  },
  {
    id: 3,
    userBid: "2,800 EGP", // tied
  },
  {
    id: 7,
    userBid: "1,200 EGP",
  },
  {
    id: 8,
    userBid: "3,500 EGP",
  },
];

//////////////////////////// on backend code for bids ///////////////////////////////////
const bidsMap = new Map(combinedAuctionData.map((obj) => [obj.id, obj]));
export const userBidsFromApi = userBidsInDB.map((obj) => ({
  ...obj,
  ...bidsMap.get(obj.id),
}));

/////////////////////////////////////////////////////////////////////////

//////////////////////////// on backend code for my auctions ////////////////////////////

const auctionsMap = new Map(combinedAuctionData.map((obj) => [obj.id, obj]));
export const myAuctionFromApi = myAuctions.map((obj) => ({
  ...obj,
  ...auctionsMap.get(obj.id),
}));

/////////////////////////////////////////////////////////////////////////

import { extractPriceDetails } from "../utils/helpers";
import { DairyAndLivestockProducts } from "./dairyLivestock";
import { CropAndFreshProducts } from "./freshProduces";

const products = [...CropAndFreshProducts, ...DairyAndLivestockProducts];

// Generate a key based on the current date (1 key per 24 hours)
function getCurrentDayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
}

// Deterministic pseudo-random generator for stable daily results
function seededRandom(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return () => {
    hash = (hash * 9301 + 49297) % 233280;
    return hash / 233280;
  };
}

export function getDealOfTheDayProducts() {
  const seed = getCurrentDayKey();
  const random = seededRandom(seed);

  // Shuffle deterministically
  const shuffled = [...products].sort(() => random() - 0.5);

  // Pick two random products (same every day)
  const selected = shuffled.slice(0, 2);

  const discounted = selected.map((product) => ({
    ...product,

    discountPrice: `${(extractPriceDetails(product.price).numberOnly * 0.6).toFixed(1)} ${extractPriceDetails(product.price).unit}`,
    discount: "40%",
    isDealOfTheDay: true,
    dealDate: seed,
  }));

  return discounted;
}

// This will always reflect today's deal
export const dealOfTheDayProducts = getDealOfTheDayProducts();

export function splitCommonPrefix(images) {
  if (!images || images.length === 0) {
    return { prefix: "", variables: [] };
  }

  // Escape special regex characters in the first image
  const escapedFirst = images[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Replace variable numeric parts (e.g., 1, 2) with a capturing group
  const dynamicPattern = escapedFirst.replace(/\d+/g, "(\\d+)");

  // Extract static prefix before variable part
  const staticPrefix = dynamicPattern.split("(\\d+)")[0];

  // Build a regex pattern dynamically using that static prefix
  const regex = new RegExp(`^(${staticPrefix})(.+)$`);

  // Match the prefix from the first image
  const prefixMatch = images[0].match(regex);
  const prefix = prefixMatch ? prefixMatch[1] : "";

  // Extract the variable part by removing the prefix
  const variables = images.map((path) => path.replace(prefix, ""));

  return { prefix, variables };
}

export function formatDate(isoDateStr) {
  const date = new Date(isoDateStr);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getActiveAuctions(auctions) {
  const now = new Date();

  return auctions.filter((auction) => {
    const start = new Date(auction.startTime);
    const end = new Date(auction.endTime);
    return now >= start && now < end;
  });
}

export function extractNumericValue(priceString) {
  return parseInt(
    priceString.replace(/,/g, "").match(/\d+/g)?.join("") || "0",
    10,
  );
}

export function extractPriceDetails(priceString) {
  if (!priceString) {
    return { numberOnly: null, currencyOnly: null, unit: null };
  }

  // Match the first number (int or decimal)
  const numberMatch = priceString.match(/[\d.,]+/);

  const numberOnly = numberMatch
    ? Number(numberMatch[0].replace(/,/g, ""))
    : null;

  // Extract full unit (everything after number)
  let unit = numberMatch
    ? priceString.slice(numberMatch.index + numberMatch[0].length).trim()
    : null;

  // Normalize: clean spaces and slashes
  if (unit) {
    unit = unit.replace(/\s*\/\s*/g, "/").replace(/\s+/g, "");
  }

  // Extract currency only (first letters sequence)
  const currencyMatch = unit ? unit.match(/[A-Za-z]+/) : null;
  const currencyOnly = currencyMatch ? currencyMatch[0] : null;

  return { numberOnly, currencyOnly, unit };
}

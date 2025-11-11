export const combinedDairyAndLivestockProducts = [
  {
    id: "animal-01",
    productName: "Fresh Chicken Eggs (30 pcs)",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898808/egg2_x0a0bl.jpg",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898808/egg2_x0a0bl.jpg",
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898808/egg3_lxstz7.jpg",
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898806/egg1_zcwxlw.jpg",
    ],
    description:
      "Farm-fresh chicken eggs, unprocessed and packed with nutrition. Ideal for daily meals and baking.",
    specs: {
      packSize: "30 eggs",
      type: "Chicken Egg",
      source: "Free-range hens",
    },
    rating: 5,
    reviews: [
      {
        name: "Amira",
        comment: "Always fresh and perfectly sized.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        reviewDate: "2025-06-08",
        likesCount: 14,
      },
      {
        name: "Ziad",
        comment: "Great value and taste.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        reviewDate: "2025-06-09",
        likesCount: 11,
      },
    ],
    stock: 34,
    price: "50 EGP/pack",
    discountPrice: "45 EGP/pack",
    category: "Dairy",
    tags: ["Dairy", "Eggs", "Poultry", "Essential"],
  },
  {
    id: "animal-02",
    productName: "Raw Cow Milk (1L)",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898808/milk2_unnwon.jpg",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898808/milk2_unnwon.jpg",
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898808/milk1_jezzth.jpg",
    ],
    description:
      "Unprocessed cow milk directly sourced from local farms. Rich in nutrients and ideal for boiling or cooking.",
    specs: {
      volume: "1 liter",
      source: "Grass-fed cows",
      packaging: "Reusable bottle",
    },
    rating: 5,
    reviews: [
      {
        name: "Karim",
        comment: "Rich and creamy, exactly how milk should be.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/26.jpg",
        reviewDate: "2025-06-10",
        likesCount: 18,
      },
      {
        name: "Mona",
        comment: "So much better than store milk.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/37.jpg",
        reviewDate: "2025-06-11",
        likesCount: 16,
      },
    ],
    stock: 21,
    price: "28 EGP/liter",
    discountPrice: "25 EGP/liter",
    category: "Dairy",
    tags: ["Dairy", "Milk", "Fresh", "Natural"],
  },
  {
    id: "animal-03",
    productName: "Beef Steak (Boneless)",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898809/sirloinSteak_m1rz9l.jpg",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898809/sirloinSteak_m1rz9l.jpg",
    ],
    description:
      "Premium boneless beef steak, tender and flavorful. Ideal for grilling or pan-searing.",
    specs: {
      type: "Boneless",
      origin: "Local pasture-raised cattle",
      cut: "Sirloin",
    },
    rating: 5,
    reviews: [
      {
        name: "Omar",
        comment: "Excellent cut, juicy and fresh.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/21.jpg",
        reviewDate: "2025-06-09",
        likesCount: 20,
      },
      {
        name: "Sara",
        comment: "Grills beautifully. Highly recommend.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        reviewDate: "2025-06-10",
        likesCount: 18,
      },
    ],
    stock: 12,
    price: "220 EGP/kg",
    discountPrice: "200 EGP/kg",
    category: "Meat",
    tags: ["Meat", "Beef", "Boneless", "Premium"],
  },
  {
    id: "animal-04",
    productName: "Feta Cheese",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898809/fetaCheese_s4z8ko.jpg",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898809/fetaCheese_s4z8ko.jpg",
    ],
    description:
      "Creamy and salty feta cheese made from fresh cow's milk. Perfect for salads and sandwiches.",
    specs: {
      weight: "250g",
      texture: "Crumbly",
      origin: "Local dairy farms",
    },
    rating: 5,
    reviews: [
      {
        name: "Layla",
        comment: "Delicious and authentic feta taste.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/11.jpg",
        reviewDate: "2025-06-12",
        likesCount: 22,
      },
      {
        name: "Hussein",
        comment: "One of the best I've tried.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        reviewDate: "2025-06-13",
        likesCount: 17,
      },
    ],
    stock: 30,
    price: "65 EGP/250g",
    discountPrice: "60 EGP/250g",
    category: "Dairy",
    tags: ["Dairy", "Cheese", "Fresh", "Salty"],
  },
  {
    id: "animal-05",
    productName: "Natural Honey (Pure)",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898808/honey_uwtsmt.jpg",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898808/honey_uwtsmt.jpg",
    ],
    description:
      "Pure, unfiltered natural honey with a golden hue and rich floral aroma. Great for health and sweetness.",
    specs: {
      weight: "500g",
      origin: "Mountain bees",
      texture: "Thick & Smooth",
    },
    rating: 5,
    reviews: [
      {
        name: "Amina",
        comment: "So pure and tasty. I use it every morning.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        reviewDate: "2025-06-14",
        likesCount: 24,
      },
      {
        name: "Khaled",
        comment: "The flavor is outstanding!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/35.jpg",
        reviewDate: "2025-06-15",
        likesCount: 20,
      },
    ],
    stock: 22,
    price: "105 EGP/jar",
    discountPrice: "95 EGP/jar",
    category: "Honey",
    tags: ["Honey", "Natural", "Pure", "Sweet"],
  },
  {
    id: "animal-06",
    productName: "Free-Range Chicken (Whole)",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898809/rawChicken_ymgdba.webp",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898809/rawChicken_ymgdba.webp",
    ],
    description:
      "Whole free-range chicken with rich flavor and firm texture. Perfect for roasting or stewing.",
    specs: {
      weight: "Approx. 1.5kg",
      type: "Whole",
      source: "Free-range poultry farm",
    },
    rating: 5,
    reviews: [
      {
        name: "Nour",
        comment: "Juicy and flavorful — I always get this one.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/42.jpg",
        reviewDate: "2025-06-16",
        likesCount: 21,
      },
      {
        name: "Samir",
        comment: "Very fresh and healthy option.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/39.jpg",
        reviewDate: "2025-06-17",
        likesCount: 19,
      },
    ],
    stock: 14,
    price: "115 EGP/kg",
    discountPrice: "105 EGP/kg",
    category: "Meat",
    tags: ["Meat", "Poultry", "Whole", "Fresh"],
  },
  {
    id: "animal-07",
    productName: "Chicken Breasts",
    productImage: `${import.meta.env.BASE_URL}products/agriProducts/DairyAndLivestock/chickenBreasts.jpg`,
    images: [
      `${import.meta.env.BASE_URL}products/agriProducts/DairyAndLivestock/chickenBreasts.jpg`,
    ],
    description:
      "Lean, boneless chicken breasts perfect for grilling, roasting, or slicing into strips.",
    specs: {
      weight: "1kg",
      cut: "Boneless",
      freshness: "Delivered chilled",
    },
    rating: 5,
    reviews: [
      {
        name: "Rasha",
        comment: "Very clean and lean, my go-to protein source.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/36.jpg",
        reviewDate: "2025-06-18",
        likesCount: 25,
      },
      {
        name: "Tamer",
        comment: "Nice texture and fresh smell.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/62.jpg",
        reviewDate: "2025-06-19",
        likesCount: 20,
      },
    ],
    stock: 18,
    price: "115 EGP/kg",
    discountPrice: "105 EGP/kg",
    category: "Meat",
    tags: ["Meat", "Poultry", "Lean", "Fresh"],
  },
  {
    id: "animal-08",
    productName: "Chicken Thighs",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898806/chickenThighs_jcjrzg.jpg",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898806/chickenThighs_jcjrzg.jpg",
    ],
    description:
      "Tender and juicy chicken thighs with skin, great for frying or baking.",
    specs: {
      weight: "1kg",
      cut: "Bone-in",
      origin: "Local farms",
    },
    rating: 5,
    reviews: [
      {
        name: "Aya",
        comment: "So juicy when cooked! Best quality.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        reviewDate: "2025-06-18",
        likesCount: 23,
      },
      {
        name: "Mahmoud",
        comment: "Perfect for my stews and BBQ.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/40.jpg",
        reviewDate: "2025-06-19",
        likesCount: 18,
      },
    ],
    stock: 20,
    price: "110 EGP/kg",
    discountPrice: "100 EGP/kg",
    category: "Meat",
    tags: ["Meat", "Poultry", "Juicy", "Cut"],
  },
  {
    id: "animal-09",
    productName: "Beef Mince",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898805/beefMince_z0zjny.webp",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898805/beefMince_z0zjny.webp",
    ],
    description:
      "Fresh ground beef with perfect fat balance for making burgers, meatballs, or sauces.",
    specs: {
      weight: "1kg",
      fatContent: "20%",
      freshness: "Same-day packed",
    },
    rating: 5,
    reviews: [
      {
        name: "Hany",
        comment: "Clean grind, no smell, very tasty.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/35.jpg",
        reviewDate: "2025-06-20",
        likesCount: 19,
      },
      {
        name: "Nahla",
        comment: "Perfect texture, makes juicy kofta.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/51.jpg",
        reviewDate: "2025-06-21",
        likesCount: 22,
      },
    ],
    stock: 11,
    price: "240 EGP/kg",
    discountPrice: "225 EGP/kg",
    category: "Meat",
    tags: ["Meat", "Beef", "Ground", "Cooking"],
  },
  {
    id: "animal-010",
    productName: "Beef Chuck",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898807/beefChuck_htzu8q.jpg",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898807/beefChuck_htzu8q.jpg",
    ],
    description:
      "Flavorful cut of beef ideal for slow cooking, stews, or shredding for tacos.",
    specs: {
      weight: "1kg",
      cut: "Chuck",
      marbling: "Moderate",
    },
    rating: 5,
    reviews: [
      {
        name: "Fady",
        comment: "Cooked it slowly, came out super tender.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/23.jpg",
        reviewDate: "2025-06-20",
        likesCount: 17,
      },
      {
        name: "Mai",
        comment: "Rich flavor, amazing in stew recipes.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/40.jpg",
        reviewDate: "2025-06-21",
        likesCount: 20,
      },
    ],
    stock: 9,
    price: "235 EGP/kg",
    discountPrice: "220 EGP/kg",
    category: "Meat",
    tags: ["Meat", "Beef", "Cut", "Stew"],
  },
  {
    id: "animal-011",
    productName: "Beef Steak Packed",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898810/steak1_thxhrx.jpg",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898810/steak1_thxhrx.jpg",
    ],
    description:
      "Premium quality beef steak slices, vacuum-packed to preserve freshness and flavor.",
    specs: {
      weight: "1kg",
      cut: "Steak",
      packaging: "Vacuum sealed",
    },
    rating: 5,
    reviews: [
      {
        name: "Tarek",
        comment: "Very tender and juicy, excellent steak night.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/38.jpg",
        reviewDate: "2025-06-21",
        likesCount: 24,
      },
      {
        name: "Nour",
        comment: "Restaurant quality at home.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        reviewDate: "2025-06-22",
        likesCount: 27,
      },
    ],
    stock: 10,
    price: "230 EGP/kg",
    discountPrice: "215 EGP/kg",
    category: "Meat",
    tags: ["Meat", "Beef", "Packed", "Premium"],
  },
  {
    id: "animal-012",
    productName: "Butter",
    productImage:
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898805/butter_m9fmf2.jpg",
    images: [
      "https://res.cloudinary.com/dauwvxrrf/image/upload/v1762898805/butter_m9fmf2.jpg",
    ],
    description:
      "Creamy and rich dairy butter made from natural cow's milk, perfect for cooking and baking.",
    specs: {
      weight: "1kg",
      fatContent: "82%",
      type: "Unsalted",
    },
    rating: 5,
    reviews: [
      {
        name: "Mariam",
        comment: "Smooth and flavorful — great quality.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/49.jpg",
        reviewDate: "2025-06-23",
        likesCount: 30,
      },
      {
        name: "Kareem",
        comment: "Excellent in baking and frying.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        reviewDate: "2025-06-24",
        likesCount: 26,
      },
    ],
    stock: 14,
    price: "200 EGP/kg",
    discountPrice: "180 EGP/kg",
    category: "Dairy",
    tags: ["Dairy", "Butter", "Natural", "Spread"],
  },
];

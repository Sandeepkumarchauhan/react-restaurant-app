const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisines: ["Italian", "Pizza"],
    avgRating: 4.5,
    deliveryTime: 30,
    offer: "20% off",
    price: "₹1200",
    image: "https://media.istockphoto.com/id/1198079266/photo/deluxe-pizza-with-pepperoni-sausage-mushrooms-and-peppers.webp?a=1&b=1&s=612x612&w=0&k=20&c=iIn_o7pSEgDcchNgU6axDJvHkZessshM9vB_IVECx1k=",
    menu: {
      Recommended: [
        { name: "Margherita Pizza", price: "₹800", avgRating: 4.6,
          image: "https://media.istockphoto.com/id/1400137973/photo/pizza-chef-serving-freshly-baked-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=l86glbhCg2_dxv6UihEwWPo8D1T9jZo4Cu6FzmRgKF0="
         }
      ],
      Drinks: [
        { name: "Coke", price: "₹160", avgRating: 4.4 }
      ],
      "Our Special": [
        { name: "Cheese Burst Pizza", price: "₹1100", avgRating: 4.7 }
      ]
    }
  },
  {
    id: 2,
    name: "Burger Bonanza",
    cuisines: ["American", "Burgers"],
    avgRating: 4.2,
    deliveryTime: 25,
    offer: "10% off",
    price: "₹960",
    image: "https://picsum.photos/200/150?random=2",
    menu: {
      Recommended: [{ name: "Cheese Burger", price: "₹640", avgRating: 4.3 }],
      Drinks: [{ name: "Pepsi", price: "₹160", avgRating: 4.2 }],
      "Our Special": [{ name: "BBQ Burger", price: "₹880", avgRating: 4.5 }]
    }
  },
  {
    id: 3,
    name: "Sushi World",
    cuisines: ["Japanese", "Sushi"],
    avgRating: 4.7,
    deliveryTime: 40,
    offer: "15% off",
    price: "₹1600",
    image: "https://picsum.photos/200/150?random=3",
    menu: {
      Recommended: [{ name: "Salmon Sushi", price: "₹960", avgRating: 4.8 }],
      Drinks: [{ name: "Green Tea", price: "₹200", avgRating: 4.5 }],
      "Our Special": [{ name: "Dragon Roll", price: "₹1200", avgRating: 4.9 }]
    }
  },
  {
    id: 4,
    name: "Taco Town",
    cuisines: ["Mexican"],
    avgRating: 4.3,
    deliveryTime: 20,
    offer: "5% off",
    price: "₹800",
    image: "https://picsum.photos/200/150?random=4",
    menu: {
      Recommended: [{ name: "Chicken Taco", price: "₹400", avgRating: 4.2 }],
      Drinks: [{ name: "Lime Soda", price: "₹140", avgRating: 4.1 }],
      "Our Special": [{ name: "Loaded Nachos", price: "₹520", avgRating: 4.5 }]
    }
  },
  {
    id: 5,
    name: "Spice Villa",
    cuisines: ["Indian"],
    avgRating: 4.5,
    deliveryTime: 28,
    offer: "₹150 off",
    price: "₹720",
    image: "https://picsum.photos/200/150?random=5",
    menu: {
      Recommended: [{ name: "Paneer Butter Masala", price: "₹480", avgRating: 4.6 }],
      Drinks: [{ name: "Lassi", price: "₹120", avgRating: 4.6 }],
      "Our Special": [{ name: "Veg Thali", price: "₹420", avgRating: 4.7 }]
    }
  },

  /* --------- SAME PATTERN CONTINUES --------- */

  {
    id: 6,
    name: "Biryani Hub",
    cuisines: ["Biryani"],
    avgRating: 4.6,
    deliveryTime: 35,
    offer: "20% off",
    price: "₹900",
    image: "https://picsum.photos/200/150?random=6",
    menu: {
      Recommended: [{ name: "Chicken Biryani", price: "₹360", avgRating: 4.7 }],
      Drinks: [{ name: "Buttermilk", price: "₹80", avgRating: 4.4 }],
      "Our Special": [{ name: "Dum Biryani", price: "₹420", avgRating: 4.8 }]
    }
  },
  {
    id: 7,
    name: "Wok Express",
    cuisines: ["Chinese"],
    avgRating: 4.1,
    deliveryTime: 32,
    offer: "10% off",
    price: "₹880",
    image: "https://picsum.photos/200/150?random=7",
    menu: {
      Recommended: [{ name: "Hakka Noodles", price: "₹320", avgRating: 4.2 }],
      Drinks: [{ name: "Ice Tea", price: "₹140", avgRating: 4.2 }],
      "Our Special": [{ name: "Chilli Noodles", price: "₹380", avgRating: 4.5 }]
    }
  },

  /* IDs 8 to 24 – SAME STRUCTURE (SAFE) */

  {
    id: 8,
    name: "Food Junction",
    cuisines: ["Multi Cuisine"],
    avgRating: 4.3,
    deliveryTime: 26,
    offer: "Special Offer",
    price: "₹750",
    image: "https://picsum.photos/200/150?random=8",
    menu: {
      Recommended: [{ name: "Combo Meal", price: "₹350", avgRating: 4.4 }],
      Drinks: [{ name: "Cold Drink", price: "₹120", avgRating: 4.3 }],
      "Our Special": [{ name: "House Special", price: "₹480", avgRating: 4.6 }]
    }
  },
  {
  id: 9,
  name: "Punjabi Tadka",
  cuisines: ["Punjabi", "Indian"],
  avgRating: 4.4,
  deliveryTime: 29,
  offer: "₹100 off",
  price: "₹700",
  image: "https://picsum.photos/200/150?random=9",
  menu: {
    Recommended: [{ name: "Chole Bhature", price: "₹220", avgRating: 4.5 }],
    Drinks: [{ name: "Sweet Lassi", price: "₹120", avgRating: 4.6 }],
    "Our Special": [{ name: "Punjabi Thali", price: "₹380", avgRating: 4.7 }]
  }
},
{
  id: 10,
  name: "South Spice",
  cuisines: ["South Indian"],
  avgRating: 4.6,
  deliveryTime: 24,
  offer: "Free Filter Coffee",
  price: "₹650",
  image: "https://picsum.photos/200/150?random=10",
  menu: {
    Recommended: [{ name: "Masala Dosa", price: "₹180", avgRating: 4.7 }],
    Drinks: [{ name: "Filter Coffee", price: "₹90", avgRating: 4.6 }],
    "Our Special": [{ name: "South Indian Thali", price: "₹320", avgRating: 4.8 }]
  }
},
{
  id: 11,
  name: "Kebab Kingdom",
  cuisines: ["Mughlai", "Kebab"],
  avgRating: 4.5,
  deliveryTime: 34,
  offer: "15% off",
  price: "₹950",
  image: "https://picsum.photos/200/150?random=11",
  menu: {
    Recommended: [{ name: "Chicken Seekh Kebab", price: "₹320", avgRating: 4.6 }],
    Drinks: [{ name: "Mint Cooler", price: "₹140", avgRating: 4.4 }],
    "Our Special": [{ name: "Kebab Platter", price: "₹520", avgRating: 4.7 }]
  }
},
{
  id: 12,
  name: "Cafe Brew",
  cuisines: ["Cafe", "Snacks"],
  avgRating: 4.3,
  deliveryTime: 22,
  offer: "Buy 1 Get 1",
  price: "₹600",
  image: "https://picsum.photos/200/150?random=12",
  menu: {
    Recommended: [{ name: "Veg Sandwich", price: "₹160", avgRating: 4.3 }],
    Drinks: [{ name: "Cold Coffee", price: "₹180", avgRating: 4.5 }],
    "Our Special": [{ name: "Cheese Loaded Fries", price: "₹260", avgRating: 4.6 }]
  }
},
{
  id: 13,
  name: "Roll Nation",
  cuisines: ["Rolls", "Fast Food"],
  avgRating: 4.2,
  deliveryTime: 21,
  offer: "10% off",
  price: "₹580",
  image: "https://picsum.photos/200/150?random=13",
  menu: {
    Recommended: [{ name: "Paneer Roll", price: "₹180", avgRating: 4.3 }],
    Drinks: [{ name: "Lemon Soda", price: "₹100", avgRating: 4.2 }],
    "Our Special": [{ name: "Loaded Cheese Roll", price: "₹240", avgRating: 4.5 }]
  }
},
{
  id: 14,
  name: "The Chinese Wok",
  cuisines: ["Chinese"],
  avgRating: 4.1,
  deliveryTime: 31,
  offer: "₹80 off",
  price: "₹820",
  image: "https://picsum.photos/200/150?random=14",
  menu: {
    Recommended: [{ name: "Veg Fried Rice", price: "₹220", avgRating: 4.2 }],
    Drinks: [{ name: "Ice Tea", price: "₹120", avgRating: 4.1 }],
    "Our Special": [{ name: "Schezwan Combo", price: "₹340", avgRating: 4.4 }]
  }
},
{
  id: 15,
  name: "Healthy Bowl",
  cuisines: ["Healthy", "Salads"],
  avgRating: 4.6,
  deliveryTime: 19,
  offer: "Free Juice",
  price: "₹640",
  image: "https://picsum.photos/200/150?random=15",
  menu: {
    Recommended: [{ name: "Quinoa Salad", price: "₹260", avgRating: 4.6 }],
    Drinks: [{ name: "Detox Juice", price: "₹160", avgRating: 4.5 }],
    "Our Special": [{ name: "Protein Power Bowl", price: "₹360", avgRating: 4.7 }]
  }
},
{
  id: 16,
  name: "Sweet Tooth",
  cuisines: ["Desserts"],
  avgRating: 4.8,
  deliveryTime: 18,
  offer: "Buy 1 Get 1",
  price: "₹520",
  image: "https://picsum.photos/200/150?random=16",
  menu: {
    Recommended: [{ name: "Chocolate Pastry", price: "₹140", avgRating: 4.7 }],
    Drinks: [{ name: "Hot Chocolate", price: "₹160", avgRating: 4.8 }],
    "Our Special": [{ name: "Belgian Waffle", price: "₹260", avgRating: 4.9 }]
  }
},
{
  id: 17,
  name: "Seafood Shack",
  cuisines: ["Seafood"],
  avgRating: 4.5,
  deliveryTime: 38,
  offer: "20% off",
  price: "₹1100",
  image: "https://picsum.photos/200/150?random=17",
  menu: {
    Recommended: [{ name: "Fish Fry", price: "₹420", avgRating: 4.6 }],
    Drinks: [{ name: "Lime Water", price: "₹120", avgRating: 4.3 }],
    "Our Special": [{ name: "Grilled Prawns", price: "₹620", avgRating: 4.7 }]
  }
},
{
  id: 18,
  name: "The Breakfast Club",
  cuisines: ["Breakfast"],
  avgRating: 4.4,
  deliveryTime: 20,
  offer: "Morning Special",
  price: "₹500",
  image: "https://picsum.photos/200/150?random=18",
  menu: {
    Recommended: [{ name: "Aloo Paratha", price: "₹160", avgRating: 4.5 }],
    Drinks: [{ name: "Tea", price: "₹60", avgRating: 4.4 }],
    "Our Special": [{ name: "Breakfast Combo", price: "₹260", avgRating: 4.6 }]
  }
},
{
  id: 19,
  name: "Italian Oven",
  cuisines: ["Italian"],
  avgRating: 4.5,
  deliveryTime: 33,
  offer: "15% off",
  price: "₹1300",
  image: "https://picsum.photos/200/150?random=19",
  menu: {
    Recommended: [{ name: "Penne Alfredo", price: "₹420", avgRating: 4.5 }],
    Drinks: [{ name: "Iced Tea", price: "₹160", avgRating: 4.4 }],
    "Our Special": [{ name: "Wood Fired Pizza", price: "₹620", avgRating: 4.7 }]
  }
},
{
  id: 20,
  name: "Street Bites",
  cuisines: ["Street Food"],
  avgRating: 4.3,
  deliveryTime: 17,
  offer: "₹50 off",
  price: "₹480",
  image: "https://picsum.photos/200/150?random=20",
  menu: {
    Recommended: [{ name: "Pav Bhaji", price: "₹180", avgRating: 4.4 }],
    Drinks: [{ name: "Masala Soda", price: "₹80", avgRating: 4.2 }],
    "Our Special": [{ name: "Street Food Combo", price: "₹260", avgRating: 4.5 }]
  }
},
{
  id: 21,
  name: "Arabian Nights",
  cuisines: ["Middle Eastern"],
  avgRating: 4.6,
  deliveryTime: 36,
  offer: "20% off",
  price: "₹1400",
  image: "https://picsum.photos/200/150?random=21",
  menu: {
    Recommended: [{ name: "Chicken Shawarma", price: "₹320", avgRating: 4.6 }],
    Drinks: [{ name: "Mint Lemonade", price: "₹160", avgRating: 4.5 }],
    "Our Special": [{ name: "Arabian Platter", price: "₹560", avgRating: 4.8 }]
  }
},
{
  id: 22,
  name: "Cloud Kitchen",
  cuisines: ["Fusion"],
  avgRating: 4.2,
  deliveryTime: 27,
  offer: "Free Dessert",
  price: "₹760",
  image: "https://picsum.photos/200/150?random=22",
  menu: {
    Recommended: [{ name: "Fusion Pasta", price: "₹340", avgRating: 4.3 }],
    Drinks: [{ name: "Fruit Punch", price: "₹140", avgRating: 4.2 }],
    "Our Special": [{ name: "Chef Special Bowl", price: "₹420", avgRating: 4.5 }]
  }
},
{
  id: 23,
  name: "BBQ Nation Jr",
  cuisines: ["BBQ"],
  avgRating: 4.7,
  deliveryTime: 39,
  offer: "25% off",
  price: "₹1500",
  image: "https://picsum.photos/200/150?random=23",
  menu: {
    Recommended: [{ name: "BBQ Chicken Wings", price: "₹480", avgRating: 4.7 }],
    Drinks: [{ name: "Cold Beer", price: "₹220", avgRating: 4.6 }],
    "Our Special": [{ name: "BBQ Feast Platter", price: "₹720", avgRating: 4.8 }]
  }
},
{
  id: 24,
  name: "Midnight Meals",
  cuisines: ["Fast Food", "Snacks"],
  avgRating: 4.1,
  deliveryTime: 45,
  offer: "Late Night Deal",
  price: "₹680",
  image: "https://picsum.photos/200/150?random=24",
  menu: {
    Recommended: [{ name: "Cheese Maggi", price: "₹160", avgRating: 4.2 }],
    Drinks: [{ name: "Energy Drink", price: "₹180", avgRating: 4.1 }],
    "Our Special": [{ name: "Midnight Combo", price: "₹320", avgRating: 4.4 }]
  }
}

];

export default restaurants;


const restaurants = [
  {
    "id": 1,
    "name": "Pizza Palace",
    "avgRating": 4.5,
    "deliveryTime": "30 mins",
    "offer": "20% off",
    "price": "$15",
    "image": "https://picsum.photos/200/150?random=1",
    "menu": {
      "Main": [
        { "name": "Margherita Pizza", "price": "$10", "offer": "10% off", "avgRating": 4.6 },
        { "name": "Pepperoni Pizza", "price": "$12", "offer": "5% off", "avgRating": 4.5 }
      ],
      "Dessert": [
        { "name": "Chocolate Brownie", "price": "$5", "offer": "Buy 1 Get 1", "avgRating": 4.7 },
        { "name": "Ice Cream", "price": "$4", "offer": "Free Topping", "avgRating": 4.6 }
      ],
      "Drinks": [
        { "name": "Coca Cola", "price": "$2", "offer": "Free Ice", "avgRating": 4.4 },
        { "name": "Orange Juice", "price": "$3", "offer": "5% off", "avgRating": 4.5 }
      ]
    }
  },
  {
    "id": 2,
    "name": "Burger Bonanza",
    "avgRating": 4.2,
    "deliveryTime": "25 mins",
    "offer": "10% off",
    "price": "$12",
    "image": "https://picsum.photos/200/150?random=2",
    "menu": {
      "Main": [
        { "name": "Cheeseburger", "price": "$8", "offer": "5% off", "avgRating": 4.3 },
        { "name": "Double Burger", "price": "$10", "offer": "10% off", "avgRating": 4.4 }
      ],
      "Dessert": [
        { "name": "Chocolate Muffin", "price": "$3", "offer": "Free Drink", "avgRating": 4.5 },
        { "name": "Donut", "price": "$2", "offer": "5% off", "avgRating": 4.3 }
      ],
      "Drinks": [
        { "name": "Pepsi", "price": "$2", "offer": "Free Ice", "avgRating": 4.2 },
        { "name": "Lemonade", "price": "$3", "offer": "5% off", "avgRating": 4.4 }
      ]
    }
  },
  {
    "id": 3,
    "name": "Sushi World",
    "avgRating": 4.7,
    "deliveryTime": "40 mins",
    "offer": "15% off",
    "price": "$20",
    "image": "https://picsum.photos/200/150?random=3",
    "menu": {
      "Main": [
        { "name": "Salmon Sushi", "price": "$12", "offer": "10% off", "avgRating": 4.8 },
        { "name": "Tuna Roll", "price": "$10", "offer": "5% off", "avgRating": 4.7 }
      ],
      "Dessert": [
        { "name": "Mochi", "price": "$5", "offer": "Free Drink", "avgRating": 4.6 },
        { "name": "Green Tea Ice Cream", "price": "$4", "offer": "5% off", "avgRating": 4.7 }
      ],
      "Drinks": [
        { "name": "Green Tea", "price": "$3", "offer": "Free Refill", "avgRating": 4.5 },
        { "name": "Sake", "price": "$6", "offer": "10% off", "avgRating": 4.6 }
      ]
    }
  },
  {
    "id": 4,
    "name": "Taco Town",
    "avgRating": 4.3,
    "deliveryTime": "20 mins",
    "offer": "5% off",
    "price": "$10",
    "image": "https://picsum.photos/200/150?random=4",
    "menu": {
      "Main": [
        { "name": "Chicken Taco", "price": "$5", "offer": "5% off", "avgRating": 4.2 },
        { "name": "Beef Taco", "price": "$6", "offer": "5% off", "avgRating": 4.3 }
      ],
      "Dessert": [
        { "name": "Churros", "price": "$3", "offer": "Buy 1 Get 1", "avgRating": 4.4 },
        { "name": "Flan", "price": "$2", "offer": "Free Drink", "avgRating": 4.5 }
      ],
      "Drinks": [
        { "name": "Margarita", "price": "$4", "offer": "10% off", "avgRating": 4.6 },
        { "name": "Soda", "price": "$2", "offer": "Free Ice", "avgRating": 4.3 }
      ]
    }
  },
  {
    "id": 5,
    "name": "Pasta Point",
    "avgRating": 4.4,
    "deliveryTime": "35 mins",
    "offer": "Free Drink",
    "price": "$18",
    "image": "https://picsum.photos/200/150?random=5",
    "menu": {
      "Main": [
        { "name": "Spaghetti", "price": "$10", "offer": "10% off", "avgRating": 4.5 },
        { "name": "Lasagna", "price": "$12", "offer": "Free Drink", "avgRating": 4.6 }
      ],
      "Dessert": [
        { "name": "Tiramisu", "price": "$6", "offer": "5% off", "avgRating": 4.7 },
        { "name": "Panna Cotta", "price": "$5", "offer": "Free Coffee", "avgRating": 4.6 }
      ],
      "Drinks": [
        { "name": "Wine", "price": "$8", "offer": "10% off", "avgRating": 4.5 },
        { "name": "Lemonade", "price": "$3", "offer": "Free Ice", "avgRating": 4.4 }
      ]
    }
  },
  {
    "id": 6,
    "name": "Grill House",
    "avgRating": 4.6,
    "deliveryTime": "30 mins",
    "offer": "20% off",
    "price": "$16",
    "image": "https://picsum.photos/200/150?random=6",
    "menu": {
      "Main": [
        { "name": "Grilled Chicken", "price": "$12", "offer": "10% off", "avgRating": 4.7 },
        { "name": "Steak", "price": "$15", "offer": "Free Drink", "avgRating": 4.6 }
      ],
      "Dessert": [
        { "name": "Cheesecake", "price": "$5", "offer": "5% off", "avgRating": 4.5 },
        { "name": "Brownie", "price": "$4", "offer": "Free Ice Cream", "avgRating": 4.6 }
      ],
      "Drinks": [
        { "name": "Beer", "price": "$6", "offer": "10% off", "avgRating": 4.5 },
        { "name": "Soda", "price": "$3", "offer": "Free Ice", "avgRating": 4.4 }
      ]
    }
  }
  // ... continue up to id 24 with similar pattern for all restaurants
]
export default restaurants;

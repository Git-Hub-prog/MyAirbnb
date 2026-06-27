const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"


    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending"
  },


  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Rooms"
  },

  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains"
  },

  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Iconic Cities"
  },

  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping"
  },

  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Trending"
  },

  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Camping"
  },

  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Rooms"
  },

  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains"
  },



{
  title: "Safari Lodge in the Serengeti",
  description: "Experience the thrill of the wild.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Serengeti National Park",
  country: "Tanzania",
  category: "Farms"
},

{
  title: "Historic Canal House",
  description: "Stay in a piece of history in Amsterdam.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Amsterdam",
  country: "Netherlands",
  category: "Iconic Cities"
},

{
  title: "Private Island Retreat",
  description: "Have an entire island to yourself.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 10000,
  location: "Fiji",
  country: "Fiji",
  category: "Trending"
},

{
  title: "Charming Cottage in the Cotswolds",
  description: "Escape to the picturesque countryside.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "Cotswolds",
  country: "United Kingdom",
  category: "Rooms"
},

{
  title: "Historic Brownstone in Boston",
  description: "Step back in time in this elegant home.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 2200,
  location: "Boston",
  country: "United States",
  category: "Iconic Cities"
},

{
  title: "Beachfront Bungalow in Bali",
  description: "Relax on the sandy shores of Bali.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Bali",
  country: "Indonesia",
  category: "Trending"
},

{
  title: "Mountain View Cabin in Banff",
  description: "Enjoy breathtaking mountain views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 1500,
  location: "Banff",
  country: "Canada",
  category: "Mountains"
},

{
  title: "Art Deco Apartment in Miami",
  description: "Step into the glamour of the 1920s.",
  image: {
    filename: "listingimage",
    url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Miami",
  country: "United States",
  category: "Rooms"
},

{
  title: "Tropical Villa in Phuket",
  description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "Phuket",
  country: "Thailand",
  category: "Amazing Pools"
},


{
  title: "Historic Castle in Scotland",
  description: "Live like royalty in this historic castle in the Scottish Highlands.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Scottish Highlands",
  country: "United Kingdom",
  category: "Castles"
},

{
  title: "Desert Oasis in Dubai",
  description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 5000,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Trending"
},

{
  title: "Rustic Log Cabin in Montana",
  description: "Unplug and unwind in this cozy log cabin surrounded by nature.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 1100,
  location: "Montana",
  country: "United States",
  category: "Camping"
},

{
  title: "Beachfront Villa in Greece",
  description: "Enjoy the crystal-clear waters of the Mediterranean.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 2500,
  location: "Mykonos",
  country: "Greece",
  category: "Trending"
},

{
  title: "Eco-Friendly Treehouse Retreat",
  description: "Stay in an eco-friendly treehouse nestled in the forest.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 750,
  location: "Costa Rica",
  country: "Costa Rica",
  category: "Camping"
},

{
  title: "Historic Cottage in Charleston",
  description: "Experience the charm of historic Charleston.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Charleston",
  country: "United States",
  category: "Rooms"
},

{
  title: "Modern Apartment in Tokyo",
  description: "Explore the vibrant city of Tokyo.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Tokyo",
  country: "Japan",
  category: "Iconic Cities"
},

{
  title: "Lakefront Cabin in New Hampshire",
  description: "Spend your days by the lake in this cozy cabin.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "New Hampshire",
  country: "United States",
  category: "Camping"
},

{
  title: "Luxury Villa in the Maldives",
  description: "Indulge in luxury in this overwater villa.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 6000,
  location: "Maldives",
  country: "Maldives",
  category: "Amazing Pools"
},


{
  title: "Ski Chalet in Aspen",
  description: "Hit the slopes in style with this luxurious ski chalet.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Aspen",
  country: "United States",
  category: "Mountains",
},

{
  title: "Secluded Beach House in Costa Rica",
  description: "Escape to a secluded beach house on the Pacific coast.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Costa Rica",
  country: "Costa Rica",
  category: "Amazing Pools", // or Trending
},

{
  title: "TestingCoordinates",
  description: "asdfsdf",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60",
  },
  price: 1234,
  location: "New Delhi",
  country: "India",

  geometry: {
    lat: 28.6139,
    lng: 77.2090
  },

  category: "Iconic Cities"
}
];
module.exports = { data: sampleListings };



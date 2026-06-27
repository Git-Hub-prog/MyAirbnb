const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {  // means if user has own  image then he can upload but they have not then default image will be there
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    geometry: {   //this is for map
        lat: Number,
        lng: Number,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"review",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    
    //filtering part
    category: {
        type: String,
        enum: [
            "Trending",
            "Rooms",
            "Iconic Cities",
            "Mountains",
            "Castles",
            "Amazing Pools",
            "Camping",
            "Farms",
            "Arctic"
        ],
        default: "Trending"
    }
});

listingSchema.post("findOneAndDelete",async(listing) =>{
    if(listing){
        await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;



















const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../util/wrapAsync");
const ExpressError = require("../util/ExpressError.js");
const Review = require("../models/review");
const Listing = require("../models/listing");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//Reviews(post review route)
router.post(
    "/", 
    isLoggedIn,
    validateReview, 
    wrapAsync(reviewController.createReview)
);

//Delete Review Route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(
        reviewController.destroyReview)
);

module.exports = router;























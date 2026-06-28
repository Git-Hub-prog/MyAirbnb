if(process.env.NODE_ENV !== "production"){  // it means it is not production type of project so it this line will protect to upload .env file to anywhere like githup or etc
    require("dotenv").config();
};

// console.log(process.env.SECRET);

const express = require("express");
const app = express();
const dns = require("dns");
const mongoose = require("mongoose");
const path = require("path");   // this path set for ejs file
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./util/ExpressError.js");
const session = require("express-session");
// const MongoStore = require('connect-mongo');
const { MongoStore } = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";  
const dbURL = process.env.ATLASDB_URL;
const sessionSecret = process.env.SECRET_KEY;
const port = process.env.PORT || 8080;

if (!dbURL) {
    throw new Error("ATLASDB_URL is missing from environment variables");
}

if (!sessionSecret) {
    throw new Error("SECRET_KEY is missing from environment variables");
}

dns.setServers(["1.1.1.1", "8.8.8.8"]);
  
main()
.then(() => {
    console.log("connected to DB");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
});

async function main() {
    // yha v change kiya 
    await mongoose.connect(dbURL, { dbName: "wanderlust" });  // now it is safe
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);  // this will behae like include pr parser for ejs file
app.use(express.static(path.join(__dirname, "public")));  // this is for static file like css and js

const store = MongoStore.create({
    mongoUrl: dbURL,
    dbName: "wanderlust",
    collectionName: "sessions",
    crypto: {
        secret: sessionSecret,
    },
    touchAfter: 24 * 3600,
});

store.on("connected", () => {
    console.log("Mongo session store connected");
});

store.on("error", (err) => {
    console.log("ERROR in SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

// app.get("/", (req,res) => {
//     res.send("Hi, I am root");
// });


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next) =>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get("/testListing", async(req, res) => {
    const sampleListing = new Listing({
        title: 'My New Village',
        description: "By the beach",
        price: 1200,
        location: "Calangute, Goa",
        country: "india"
    }) ;
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode=500,message="something went wrong!" } = err;
    res.status(statusCode).render("error.ejs",{message});
    // res.status(statusCode).send(message);
    
});












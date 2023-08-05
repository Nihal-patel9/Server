const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => { console.log("DB Connected Successfully") })
        .catch((err) => {
            console.log("DB Connection Issue");
            console.error(err);
            process.exit(1);
        });
}
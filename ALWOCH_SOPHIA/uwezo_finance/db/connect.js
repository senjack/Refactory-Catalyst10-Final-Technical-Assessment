const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection Established...");

    // Seed Data
  } catch (error) {
    console.log(error.message);

    // Exit with failure
    process.exit(1);
  }
};
module.exports = connectDB;
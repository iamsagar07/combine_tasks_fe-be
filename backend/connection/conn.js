const mongoose = require("mongoose");
const conn = async () => {
  try {
    const response = await mongoose.connect(`${process.env.MONGO_URL}`);
    if (response) {
      console.log("Connected to DB");
    }
  } catch (error) {
    console.error("Error!!");
  }
};

conn();
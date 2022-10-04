const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
    };
    await mongoose.connect(
      /* CREATE & CONNECT TO YOUR OWN MONGODB DATABASE */
      `mongodb+srv://ArkashJ:X5etRa67@cluster0.knkdwuc.mongodb.net/Hack4Impact?retryWrites=true&w=majority`,
      connectionParams,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};

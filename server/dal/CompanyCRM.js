const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/CompanyCRM");
  console.log("Connected To MongoDB");
}

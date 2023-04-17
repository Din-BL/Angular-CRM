const express = require("express");
const cors = require("cors")
const app = express();
require("./dal/CompanyCRM");
const user = require("./routes/user");
const customer = require("./routes/customer");
const employee = require("./routes/employee");

app.use(express.json());
app.use(cors({ origin: '*' }))
app.use("", user);
app.use("/customers", customer);
app.use("/employees", employee);

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});

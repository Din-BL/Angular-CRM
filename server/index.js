const express = require("express");
const cors = require("cors")
const app = express();
require("./dal/CompanyCRM");
const user = require("./routes/user");
const customer = require("./routes/customer");
const employee = require("./routes/employee");
const morgan = require('morgan')

app.use(express.json());
app.use(morgan('tiny'))
app.use(cors({ origin: '*' }))
app.use("/user_api", user);
app.use("/customers_api", customer);
app.use("/employees_api", employee);

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});

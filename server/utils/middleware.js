const jwt = require("jsonwebtoken");
const config = require("config");
const { registerSchema, loginSchema, customerSchema } = require("./validations");

module.exports.userValidate = (req, res, next) => {
  if (req.baseUrl === "/customers_api") schema = customerSchema;
  else req.path === "/register_api" ? (schema = registerSchema) : (schema = loginSchema);
  const { error } = schema.validate(req.body);
  if (error) res.status(400).send(error.details);
  else next();
};

module.exports.userAuthenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  jwt.verify(authHeader, config.get("ACCESS_TOKEN_SECRET"), (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

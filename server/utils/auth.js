const jwt = require("jsonwebtoken");

const secret = "secret";
const expiration = "1h";

module.exports = {
  signToken: function ({ req }) {
    let token = req.body.token || req.query.token || req.header.authorization
    const payload = { username, email, _id };
    if (req.headers.authorization) {
      
    }

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

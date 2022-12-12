const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECTRET);
    const { username, userId } = decoded;
    req.username = username;
    req.userId = userId;
    next();
  } catch {
    next(" AUthintication failed and you are stupid");
  }
};

module.exports = checkLogin;

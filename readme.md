## Mongoose model instance method

- create a schema from mongoose.schema class

```javascript
const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
module.exports = todoSchema;
```

- create a model(which is another class) from mongoose.model class & pass schema to it.

```js
const Todo = new mongoose.model("Todo", todoSchema);
```

- create a document using model class

```js
const todo = new Todo({ title: "learn node js...." });
```

- call necessary model instance method using document

```javascript
todo.save();
```

## mongoose Instance Methods, Static & Query Helpers

## Bcrypt

- auto-gen a salt and hash
- To check a password compare method

```javascript
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {});
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
  // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
  // result == false
});
```

## Jason wetoken

- Signing a token with 1 hour of expiration:

```javascript
const token = jwt.sign(
  {
    username: user[0].username,
    userId: user[0]._id,
  },
  process.env.JWT_SECTRET,
  { expiresIn: "1h" }
);

res.status(200).json({
  access_token: token,
  messgae: "login sucessfull",
});
```

- token verification using jwt.verify

```javascript
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
```

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
- jwt json web token

```javascript
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {});
```

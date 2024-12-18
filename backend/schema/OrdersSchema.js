const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  createdAt: {
    type: Date,
    default: () => {
      const now = new Date();
      now.setHours(now.getHours() + 5);
      now.setMinutes(now.getMinutes() + 30);
      return now;
    },
  },
});

module.exports = { OrdersSchema };

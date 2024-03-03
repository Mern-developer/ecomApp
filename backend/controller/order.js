const order = require("../model/order.js");
const orderModel = require("../model/order.js");

module.exports = {
  orderCont: async (req, res) => {
    try {
      const data = req.body.cartOrder;

      console.log(data);

      const newCart = data.map((order) => ({
        id: order.id,
        title: order.title,
        description: order.description,
        price: order.price,
        totalPrice: order.totalPrice,
        quantity: order.quantity,
      }));

      const objectOrder = new orderModel({
        cart: newCart,
      });
      const resp = await objectOrder.save();

      if (resp) {
        res.status(200).send({
          message: "Order created Successfully!",
        });
      }
    } catch (err) {
      res.status(500).json({ error: `something went wrong ${err.message}` });
    }
  },
  

};

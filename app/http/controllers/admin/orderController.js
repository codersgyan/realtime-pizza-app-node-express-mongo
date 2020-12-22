const Order = require("../../../models/order")

function orderController() {
  return {
    index(req, res) {
        Order
        .find({ status: { $ne: "completed" } }, null, {
          sort: { createdAt: -1 },
        })
        .populate("customerId", "-password")
        .exec((err, orders) => {
          // It will not show raw json data on click back and forward button
          res.header(
            "Cache-Control",
            "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
          )

          if (req.xhr) {
            return res.json(orders)
          } else {
            return res.render("admin/orders")
          }
        })
    },
  }
}

module.exports = orderController

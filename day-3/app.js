const orders = [
  { id: 1, customer: "Aman", amount: 1200, status: "delivered" },
  { id: 2, customer: "Riya", amount: 800, status: "pending" },
  { id: 3, customer: "Vansh", amount: 1500, status: "delivered" }
];

// Filter delivered orders
const deliveredOrders = orders.filter(order => order.status === "delivered");

// Print customer and amount
deliveredOrders.forEach(order => {
  console.log(`${order.customer} paid ₹${order.amount}`);
});
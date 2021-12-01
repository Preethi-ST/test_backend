require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

/* app.get("/", (req, res) => { ---------------------------- 1st change
  res.json({ message: "API running..." });
}); */

app.use("/api/products", productRoutes);

app.get('/', (req,res) => {
  res.send('Hello to Shopping Cart');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
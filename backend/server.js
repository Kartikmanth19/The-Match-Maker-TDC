require("dotenv").config();

const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customerRoutes");
const matchRoutes = require("./routes/matchRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("TDC Backend Running");
});

app.use("/api/customers", customerRoutes);
app.use("/api/matches", matchRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});
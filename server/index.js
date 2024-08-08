const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const AuthRoute = require("./routes/AuthRoute");
const { checkConnection } = require("./config/Connection");

app.use(express.json());
app.use(cors());


app.use("/user",AuthRoute)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

checkConnection();
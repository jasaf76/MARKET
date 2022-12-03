const dotenv = require("dotenv");
const app = require("../../../../../server/app");
const mongoose = require("mongoose");
// console.log(app.get("env"))

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log("DB Connection Successfully");
  })
 // .catch((err) => console.log("ERROR"));

console.log(process.env.NODE_ENV);

// //console.log(process.env)
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server läuft in Port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message)
});
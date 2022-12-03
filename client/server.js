const dotenv = require("dotenv");
const app = require("./app");
//const mongoose = require("mongoose");
// console.log(app.get("env"))
const mongoose = require ('mongoose')
dotenv.config({ path: "./config.env" });


const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useUniFiedTopology: true,
    useNewUrlParser: true,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log("DB Connection Successfully");
  });



// //console.log(process.env)
const port = process.env.PORT || 3003;
app.listen(port,() => {
  console.log(`Server läuft in Port..........`);

})
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
});
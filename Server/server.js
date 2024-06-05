const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const port = parseInt(process.env.PORT, 10) || 8000;
const cors = require("cors");
const app = express();
const db = require("./config/db");
const cloudinary = require("cloudinary").v2;
          
cloudinary.config({ 
  cloud_name: 'dzeamu5rw', 
  api_key: '926149614377853', 
  api_secret: '8LzV_CG-tVmuZ4DPpT2ZLahSZhY' 
});

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/v1/Api", require("./routes/RegisterRoute"));
app.use("/v1/Api/Category", require("./routes/CategoryRoutes"));
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`server Start on Port ${port}`);
});

import mongoose from "mongoose";
import config from "./config";

const URI = "mongodb://localhost/mern-videos";

try {
  (async () => {
    const db = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected to:", db.connection.name);
  })();
} catch (error) {
  console.log(error);
}

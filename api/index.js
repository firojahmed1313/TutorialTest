const mongoose= require('mongoose');
const mongoUrl = "mongodb+srv://newgitpods:VL6eb0rHhdZJ1gv0@mdfirojahmed.chpjhjr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
    dbName: "E-comm-Firoj"
}).then(() => {
    console.log("Database Connected");
}).catch((error) => {
    console.log(mongoUrl);
    console.error("Error connecting to database:", error);
});
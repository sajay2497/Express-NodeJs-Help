// ====================== MONGOOSE CONNECTION==============================
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express_graphQL', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.on("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
});

// ====================== END MONGOOSE CONNECTION==============================

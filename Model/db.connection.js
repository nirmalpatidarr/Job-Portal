
const mongoose = require("mongoose");
    /// defining connection string
mongoose.connect('mongodb://localhost:27017/usersdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


module.exports = mongoose

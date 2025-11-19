const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    teamName: { type: String, required: true, unique: true },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

module.exports = mongoose.model("Team", TeamSchema);

const mongoose = require('mongoose');

// Schema to define the fields for the Amountrewarded collection
const AmountSchema = new mongoose.Schema({
    extraamount: {
        type: Number,
        required: true, // Ensures this field is mandatory
        default: 0,     // Default value if none is provided
    },
    rewardedamount: {
        type: Number,
        required: true, // Ensures this field is mandatory
        default: 0,     // Default value if none is provided
    }
});

// Export the model based on the schema
const Amountrewarded = mongoose.model('extraamounts', AmountSchema);

module.exports = Amountrewarded;

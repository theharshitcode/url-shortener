const mongoose = require('mongoose');


const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortId: {
        type: String,
        required: true,
        unquie: true
    }
}, { timeseries: true });

const userUrl = mongoose.model('short-url', urlSchema);

module.exports = userUrl;
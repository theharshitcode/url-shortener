const mongoose = require('mongoose');


async function Short_Url(url) {
    return mongoose.connect(url)
}

module.exports = {Short_Url};


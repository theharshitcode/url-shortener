const URL = require('../Model/short-url');
const {nanoid} = require('nanoid');

async function Homepage(req, res) {
    const allURL = await URL.find({});
    return res.send(allURL);
}

async function Shorturl(req, res) {
    try {
        const { originalUrl } = req.body;
        if (!originalUrl) {
            return res.status(400).json({ msg: 'URL Required Field!' })
        }

        const existUrl = await URL.findOne({originalUrl});
        if (existUrl) {
            return res.status(409).json({ msg: "Already Exist URL Email !" })
        }
          
        //SHort ID
        const shortId = nanoid(8);

        const result = await URL.create({originalUrl, shortId});

       return res.status(201).json({ msg: "Successful post short-url done! ", shorturl: `http://localhost:3000/api/url/${shortId}` ,data: result });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }

}

async function RedirectUrl(req, res) {
    try {
        const { shortId } = req.params;
        const entry = await URL.findOne({ shortId });

        if (!entry) {
            return res.status(404).json({ msg: "URL not found" });
        }

       return res.redirect(entry.originalUrl);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

module.exports = {
    Homepage,
    Shorturl,
    RedirectUrl
}
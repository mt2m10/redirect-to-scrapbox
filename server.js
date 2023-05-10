const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.get(/\/scrapbox\/(.+)/, (req, res) => {
    // Scrapbox base url
    const url = process.env.SCRAPBOX_URL;
    // Get Scrapbox title
    const title = req.params[0];
    // Redirect to Scrapbox
    res.redirect(301, `${url}/${encodeURIComponent(title)}`);
});

app.listen(port);

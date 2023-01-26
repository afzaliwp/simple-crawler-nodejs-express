const express = require("express");
const crawler = require("./crawler");

const app = express();

app.get('/', async (req, res) => {
    const url = req.query.url;

    if ( ! url || 0 === url.length ) {
        res.send( {error: 'set a url as query parameter like ?url=https://test.com'} );
        return;
    }

    const webPage = await crawler(url);
    res.send(webPage.data);
});

app.listen(9999, () => {
    console.log(`listening on port 9999. http://localhost:9999`);
});
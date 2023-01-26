const axios = require("axios");
const cheerio = require("cheerio");

const getWebPage = async (url) => {
    let crawledData = '';
    let $;

    await axios.get(url)
        .then((result) => {
            crawledData = result;
            $ = cheerio.load(crawledData.data);
        });


    return {
        price: Number( $('p.price .woocommerce-Price-amount').text() ),
    };
}

module.exports = getWebPage;
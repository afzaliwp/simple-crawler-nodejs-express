const axios = require("axios");
const cheerio = require("cheerio");

const getWebPage = async (url) => {
    let crawledData = '';
    let $;

    await axios.get(url)
        .then((result) => {
            crawledData = result;
            $ = cheerio.load(crawledData.data);
        })
        .catch((error) => {
            console.log('there is an error', error.message);
        });


    return {
        title: $('.product_title.entry-title').text(),
        currency: $('.woocommerce-Price-currencySymbol').text(),
        price: Number($('p.price .woocommerce-Price-amount').text()),
        categories: $('.posted-in .product-categories').text(),
        shortDescription: $('.woocommerce-product-details__short-description').text(),
        description: $('#collapsedescription .card-body').text(),
    };
}

module.exports = getWebPage;
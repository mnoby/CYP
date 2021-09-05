const Homepage = require ('../support/pages/Homepage');
const data = require('../support/datatest/HomepageData');
const HomepageData = require('../support/datatest/HomepageData');
let homepage = new Homepage();


describe('BDD Atlas', () =>{
    it ('Visit BDD Atlas', () =>{
        homepage.visit('http://bdd.atlasid.tech/');
    })

    it ('type a Quote', () => {
        homepage.masukkan_quote(data.datatest.quote);
    })

    it ('Choose Color', () => {
        homepage.pilih_warna(data.datatest.quote_colour);
    })

    it ('Submit Quote', () => {
        homepage.submit(HomepageData.datatest.quote, HomepageData.datatest.quote_colour);
    })

    it ('Clear Quote', () => {
        homepage.clear_quote(data.datatest.quote);
    })
})
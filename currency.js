const cc = require('currency-converter-lt')


const currencyConverter = new cc({from:"NPR", to:"INR", amount: 100})



const convert = () => {
    const convertCurrency = currencyConverter.convert().then((response) => {
        console.log(response) //or do something else
    })
    return convertCurrency
}

convert()


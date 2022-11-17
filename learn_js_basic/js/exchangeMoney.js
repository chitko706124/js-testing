// mmk to usd | 1usd = 2100mmk

 const rates = {
    usd : 2100,
    sgd : 1490,
    eur : 2108,
 }

 function usdToMMK(inPutUSD){
    return (inPutUSD * rates.usd)+ " MMK";
 }

 function toMMK(inputAmount,fromCurrency){
    return (inputAmount * rates[fromCurrency]) + " MMK";
 }

 function toCurrency(fromMMK,currency){
    return ( fromMMK / rates[currency] ) + " " +currency;
 }

 // from any currnecy to any currency
 // 500 sgd to usd ? 
 // 500 sgd => mmk => usd

 function toAnnyCurrency(inPutAmount,fromCurrency,toCurrency){
    let mmk = inPutAmount * rates[fromCurrency];
    let result = mmk / rates[toCurrency];
    return result + " " +toCurrency;
 }



console.log(toAnnyCurrency(500,"usd","sgd"))
//  console.log(usdToMMK(500))
//  console.log(toMMK(500,"usd"))
//  console.log(toMMK(500,"eur"))
//  console.log(toMMK(500,"sgd"))
// console.log(toCurrency(500000,"usd"))
// console.log(toCurrency(250000,"sgd"))
// console.log(toCurrency(500000,"eur"))


 
const myHeaders = new Headers();
myHeaders.append("apikey", "1bd50b33e46b4f297fa82dac56d8e20a");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

try{
    const result = await fetch("https://api.apilayer.com/exchangerates_data/latest?base=USD", requestOptions);
    const resultObj = await result.json();
    console.log(JSON.stringify(resultObj, null, 2));
}
catch(err){
    console.log("Could not fetch currency data.");
    throw err;
}
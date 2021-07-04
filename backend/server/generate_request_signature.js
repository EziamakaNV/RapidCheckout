// load variables to help make rapid api requests
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';

dotenv.config();

// Note: Install the crypto-js module.

console.log('secret_key >>>>>>>>>>>>>>>>> ',process.env.secret_key);

export default (httpMethod="get", urlPath="/v1/data/countries", requestBody = "") => {
    dotenv.config();
    let http_method = httpMethod;                // Lower case.
    let url_path = urlPath;    // Portion after the base URL.
    let salt = CryptoJS.lib.WordArray.random(12);  // Randomly generated for each request.
    let timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString(); // Current Unix time.
    const access_key = process.env.access_key;     // The access key received from Rapyd.
    const secret_key = process.env.secret_key;     // Never transmit the secret key by itself.
    let body = requestBody;                          // JSON body goes here.

    if (JSON.stringify(requestBody) !== '{}' && requestBody !== '') {
        body = JSON.stringify(requestBody);
    }

    let to_sign = http_method + url_path + salt + timestamp + access_key + secret_key + body;

    let signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(to_sign, secret_key));

    return {
        signature: CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature)),
        timestamp,
        salt,
        access_key
    };
};
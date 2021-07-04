import generateRequestSignature from "./generate_request_signature.js";
import axios from 'axios';

const app = express();

const instanceConfig = {
    baseURL: "https://sandboxapi.rapyd.net",
    headers: { "Content-Type": "application/json" }
};

const axiosInstance = axios.create(instanceConfig);

const makeRequest = async (requestType, urlPath, requestBody) => {
    const { signature, salt, access_key, timestamp } = generateRequestSignature(requestType, urlPath, requestBody);

    try {
        const response = await axiosInstance({
            method: requestType,
            url: urlPath,
            headers: {
                signature: signature,
                timestamp: timestamp,
                access_key: access_key,
                salt: salt
            },
            data: requestBody
        });

        return response;
    } catch(e) {
        console.log(e);
    }
};

const requestBody = {
    business_vat_id: "123456789",
    email: "johndoe34@rapyd.net",
    
    invoice_prefix: "JD-",
    metadata: {
    	merchant_defined: true
    },
    name: "Tony Max",
    phone_number: "+14155559993"
};

const response = await makeRequest("get","/v1/customers/cus_b24b85b796fbf30ece804690d01c377b");

console.log(response.data);

app.get('/api/register', );
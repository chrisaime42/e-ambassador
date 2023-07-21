require("dotenv").config();
const accountSid = `${process.env.ACCOUNT_SID_TWILIO}`;
const authToken = `${process.env.AUTH_TOKEN_TWILIO}`;

const client = require('twilio')(accountSid, authToken);

const generateOTP = () => {
    var minm = 10000;
    var maxm = 99999;

    return Math.floor(Math.random()  * (maxm - minm + 1)) + minm;
}
const generateTRACK = () => {
    var minm = 100;
    var maxm = 999;

    return Math.floor(Math.random()  * (maxm - minm + 1)) + minm;
}


const random = () => {
    var minm = 100000;
    var maxm = 999990;

    return Math.floor(Math.random()  * (maxm - minm + 1)) + minm;
}
const GET_PREF_STORE_CODE = "FDX"
const GET_PREF_ORDER = "ORD"
const GET_PREF_TRACK = "TXR"


const GENERATE_STORE_CODE = () => {

    let StoreCode = generateOTP();
    const today = new Date();
    const YEAR = today.getUTCFullYear();
    const MONTH = today.getUTCMonth();
    const store_code = `${YEAR}${MONTH}`+StoreCode;
    return GET_PREF_STORE_CODE+store_code;
}


const GENERATE_ORDER_NO = () => {

    let order_no_ = random();
    const today = new Date();
    const YEAR = today.getUTCFullYear();
    const MONTH = today.getUTCMonth();
    const DAY = today.getUTCDay();
    const order_no = `${YEAR}${MONTH}${DAY}`+order_no_;
    return `${GET_PREF_ORDER}${order_no}`;
}
const GENERATE_TRACK_ORDER_NO = () => {

    let track_order_no_ = generateTRACK();
    const today = new Date();
    const YEAR = today.getUTCFullYear();
    const MONTH = today.getUTCMonth();
    const DAY = today.getUTCDay();
    const track_order_no = `${YEAR}${MONTH}${DAY}`+track_order_no_;
    return `${GET_PREF_TRACK}${track_order_no}`;
}



const SEND_SMS_WITH_TWILIO = async(from, to, body) => {
    client.messages
    .create({
        body: `${body}`,
        from: `${from}`,
        to: `${to}`
    })
    .then(message => console.log(message.sid))
    .catch(error => console.log(error));
}


module.exports ={
    SEND_SMS_WITH_TWILIO,
    generateOTP,
    GENERATE_STORE_CODE,
    GENERATE_ORDER_NO,
    GENERATE_TRACK_ORDER_NO
}
/* 连接MongDB, 商品列表查询接口 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    "userId": String,
    "userName": String,
    "userPwd": String,
    "orderList": Array,
    "cartList": [{
        "productId": String,
        "productName": String,
        "salePrice": String,
        "productImage": String,
        "checked": String,
        "productNum": String
    }],
    "addressList": [{
        "addressId": String,
        "userName": String,
        "streetName": String,
        "postCode": Number,
        "tel": Number,
        "isDefault": Boolean
    }]
})

module.exports = mongoose.model('User', usersSchema);
var express = require('express');
var router = express.Router();

const OrderGetMethod = require('../controllers/order/get_controller');
const OrderModifyMethod = require('../controllers/order/modify_controller');

let orderGetMethod = new OrderGetMethod();
let orderModifyMethod = new OrderModifyMethod();


router.get('/order', orderGetMethod.getAllOrder);

// 取得單一顧客的訂單資料
router.get('/order/member', orderGetMethod.getOneOrder);

router.post('/order', orderModifyMethod.postOrderAllProduct);
router.put('/order', orderModifyMethod.updateProductList);
router.delete('/order', orderModifyMethod.deleteOrderProduct);
router.post('/order/addoneproduct', orderModifyMethod.postOrderOneProduct);
router.put('/order/complete', orderModifyMethod.putProductComplete);





module.exports = router;

var express = require('express');
var router = express.Router();
const MemberModifyMethod = require('../controllers/member/modify_controller');


let memberModifyMethod = new MemberModifyMethod();

router.post('/member', memberModifyMethod.postRegister);

router.post('/member/login', memberModifyMethod.postLogin);

router.put('/member', memberModifyMethod.putUpdate);

router.put('/updateimage', memberModifyMethod.putUpdateImage);


module.exports = router;

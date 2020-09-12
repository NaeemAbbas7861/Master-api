const express = require('express')
const router = express.Router()
const { jwtAuthloginPath } = require('../constant/variables')
const { jwtAuthlogin } = require('../services/auth')

router.get(jwtAuthloginPath, async (req, res) => {
	jwtAuthlogin(req, res);
});
module.exports = router;
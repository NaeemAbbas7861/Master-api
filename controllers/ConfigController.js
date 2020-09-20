const express = require('express')
const router = express.Router();
const { RoledefualtPath } = require('../constant/variables')
const { InsertRole } = require('../services/config')
router.post(RoledefualtPath, async (req, res) => {
	InsertRole(req, res);
});
module.exports = router;

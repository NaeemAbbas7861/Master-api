
const {sql, poolPromise } = require('../config/db');

const InsertRole = async (req, res) => {

	try {  
		const pool = await poolPromise  
		 await pool.request()
		.input("RoleName", sql.VarChar(20),req.params.RoleName)
		.execute("[dbo].[InsertRoles]").then(function (recordSet) { 
		 res.status(200).json(recordSet.recordsets);
		})  
		} catch (err) {  
		res.status(400).json({ message:err.message})  
		res.send(err.message)  
		} 
}



module.exports = { InsertRole};
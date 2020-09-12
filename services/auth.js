
const { message } = require('../constant/variables');
const {sql, poolPromise } = require('../config/db');


const jwtAuthlogin = async (req, res) => {

	try {  
		const pool = await poolPromise  
		const result = await pool.request()
		.input("UserName", sql.VarChar(300),req.params.UserName)  
		.input("Password", sql.VarChar(300),req.params.Password)  

		.execute("[dbo].[jwtAuthlogin]").then(function (recordSet) { 
		 res.status(200).json({ status: "Success" });
		})  
		} catch (err) {  
		res.status(400).json({ message:err.message})  
		res.send(err.message)  
		} 
}



module.exports = { jwtAuthlogin};
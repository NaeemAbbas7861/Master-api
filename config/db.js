const sql = require('mssql')  
const config = {  
user: 'sa',  
password: 'MyP@ssword123',  
server: "DESKTOP-SJFM58R",  
database: "Master_database"  
}  
const poolPromise = new sql.ConnectionPool(config)  
.connect()  
.then(pool => {  
console.log('Connected to MSSQL')  
return pool  
})  
.catch(err => console.log('Database Connection Failed! Bad Config: ', err))  
module.exports = {  
sql, poolPromise  
}  
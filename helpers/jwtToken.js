const jwt = require('njwt');

const generateToken=(obj)=>{
	console.log(obj);
		const claims =
		 {
			 iss: 'fun-with-jwts',
			  sub: 'AzureDiamond',
			data:obj
		 }
		const token = jwt.create(claims, 'top-secret-phrase')
		token.setExpiration(new Date().getTime() + 60*1000)
		return token.compact();
}
module.exports=generateToken;
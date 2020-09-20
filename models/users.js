
const users = (out)=>
{

var obj={
	Id:out[0][0].Id,
	UserName:out[0][0].UserName,
	Email:out[0][0].Email,
	ProfileImage:out[0][0].Image,
	Role:out[1][0],
	Permissions:out[2]
}
return obj;
}
module.exports=users;
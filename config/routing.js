
const auth=require('../controllers/authController');

const routing=(app)=>{
app.use('/api', auth)  
}
module.exports=routing;
let fs = require('fs');

module.exports = ()=>{
	fs.readFileSync('./uploads/41371.jpg', (err, data)=>{
		if(err){
			return err;
			console.log("err");
		}
		else{
			return data;
			console.log("data");
		}
	})
}
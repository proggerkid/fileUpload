module.exports = (file)=>{
	console.log(file.name);
	file.mv('./uploads/' + file.name);
}
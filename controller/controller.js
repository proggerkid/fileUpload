
module.exports = {
    renderIndex: (req, res)=>{
        res.render('index');
    },
    uploadFile: (req, res)=>{
    	console.log(req.files);
        res.render('index');              
    }
}

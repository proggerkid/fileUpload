let model_fileUpload = require('../model/model_fileUpload');
let model_getFile = require('../model/model_getFile');

module.exports = {
    renderIndex: (req, res)=>{
        res.render('index');
    },
    uploadFile: (req, res)=>{
    	model_fileUpload(req.files.file);
        res.render('index');              
    },
    sendFile: (req, res)=>{
        let file = model_getFile();
    }
}

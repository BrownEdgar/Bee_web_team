


module.exports = function fileFilter(req, file, cb) {
	if (file.mimetype !== 'application/pdf' || file.mimetype == 'application/msword') {
		cb(new Error("cv Error, file type  must by 'png' or 'doc'"), true);
	}else{
		cb(null, false);
	}
}
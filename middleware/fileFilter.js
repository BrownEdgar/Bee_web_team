const FILE_FIELDS = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'application/msword']

module.exports = function fileFilter(req, file, cb) {

	if (file.mimetype === FILE_FIELDS[0] || file.mimetype === FILE_FIELDS[1] || file.mimetype === FILE_FIELDS[2]) {
		cb(null, true);
	}else{
		cb(new Error("cv Error: file type must by 'png', 'docx' or 'doc'."),  false);
	}
}
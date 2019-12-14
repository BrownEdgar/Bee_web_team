
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const crypto = require('crypto');
const path = require('path');
const mongoURI = "mongodb://Edgar:sebastian25@ds141248.mlab.com:41248/beeweb";
console.log('mongoURI', mongoURI);
const { Errors, ErrorMessage } = require('../helpers/error');
const Error = new Errors();
const multer = require('multer');


// Create mongo connection
var conn = mongoose.connection
let gfs;
conn.once('open', (err) => {
	if (err) return handleError(err);
	// Init stream
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection('uploads');
});

class UploadsControler {
		async getAllFiles(req, res) {
			gfs.files.find().toArray((err, files) => {
				console.log('files: ', files);
				
			// Check if files
			if (!files || files.length === 0) {
				return res.status(404).json({
					err: 'No files exist'
				});
			}
			// Files exist
			return Error.successful(res, files);
			});
		}

		async storage(req, res) {
				console.log('222');
	
		return storage;
	}

}
	const storage = new GridFsStorage({
		url: mongoURI,
		file: (req, file) => {
			return new Promise((resolve, reject) => {
				crypto.randomBytes(16, (err, buf) => {
					if (err) {
						return reject(err);
					}
					const filename = buf.toString('hex') + path.extname(file.originalname);
					const fileInfo = {
						filename: filename,
						bucketName: 'uploads'
					};
					resolve(fileInfo);
				});
			});
		}
	});
module.exports ={
	storage,
	UploadsControler
}






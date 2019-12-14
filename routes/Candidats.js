const express = require('express');
const router = express.Router();
const multer = require('multer')
const fileFilter = require('../middleware/fileFilter')
// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, './uploads/');
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
// 	}
// });
// const upload = multer({ 
// 	storage,
// 	limits:{
// 		fileSize:1024 * 1024 * 10
// 	}, 
// 	fileFilter
//  })
const CandidatsController = require('../Controller/Candidats');
const controller = new CandidatsController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();


const {UploadsControler,storage}  = require('../config/multerStorage');
const filesController = new UploadsControler();
const upload = multer({
	storage
});



//get all Candidats
router.get('/',  controller.getCandidats);
router.get('/files', filesController.getAllFiles);

//add Candidats
router.post('/', upload.single('file'), controller.addCandidats);

//get Candidats by ID
router.get('/:Id', checkAuth.isIdCorrect, controller.getSpecialCandidat);

//update Candidats
router.patch('/:Id', checkAuth.isIdCorrect, controller.updateCandidat);

//Candidats Deleted
router.delete('/:Id', checkAuth.isIdCorrect, controller.deleteCandidat);

module.exports = router;
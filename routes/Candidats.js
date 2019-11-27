const express = require('express');
const router = express.Router();
const multer = require('multer')
const fileFilter = require('../middleware/fileFilter')
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
	}
});
const upload = multer({ 
	storage,
	limits:{
		fileSize:1024 * 1024 * 10
	}, 
	fileFilter
 })
const CandidatsController = require('../Controller/Candidats');
const controller = new CandidatsController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();


//get all Candidats
router.get('/',  controller.getCandidats);

//add Candidats
router.post('/', [checkAuth.checkCandidatAdds, upload.single('cv')], controller.addCandidats);

//get Candidats by ID
router.get('/:candidatId', checkAuth.isIdCorrect, controller.getSpecialCandidat);

//update Candidats
router.patch('/:candidatId', checkAuth.isIdCorrect, controller.updateCandidat);

//Candidats Deleted
router.delete('/:candidatId', checkAuth.isIdCorrect, controller.deleteCandidat);

module.exports = router;
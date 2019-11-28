import express from 'express';
const router = express.Router();
import multer from 'multer'
import fileFilter from '../middleware/fileFilter'
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
import CandidatsController from '../Controller/Candidats';
const controller = new CandidatsController();
import loginValidator from '../Validate/loginValidator';
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

export default router;
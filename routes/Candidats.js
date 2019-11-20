import express from 'express';
const router = express.Router();
import CandidatsController from '../Controller/Candidats';
const controller = new CandidatsController();
import loginValidator from '../Validate/loginValidator';
const checkAuth = new loginValidator();

//get all Candidats
router.get('/',  controller.getCandidats);

//add Candidats
router.post('/', controller.addCandidats);

//get Candidats by ID
router.get('/:candidatId', controller.getSpecialCandidat);

//update Candidats
router.patch('/:candidatId', controller.updateCandidat);

//Candidats Deleted
router.delete('/:candidatId', controller.deleteCandidat);



export default router;
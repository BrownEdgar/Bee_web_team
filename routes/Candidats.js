const express = require('express');
const router = express.Router();
const CandidatsController = require('../Controller/Candidats');
const controller = new CandidatsController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();

//get all Candidats
router.get('/',  controller.getCandidats);

//add Candidats
router.post('/', checkAuth.checkCandidatAdds, controller.addCandidats);

//get Candidats by ID
router.get('/:candidatId', checkAuth.isIdCorrect, controller.getSpecialCandidat);

//update Candidats
router.patch('/:candidatId', checkAuth.isIdCorrect, controller.updateCandidat);

//Candidats Deleted
router.delete('/:candidatId', checkAuth.isIdCorrect, controller.deleteCandidat);



module.exports = router;
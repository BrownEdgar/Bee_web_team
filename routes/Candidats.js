const express = require('express');
const router = express.Router();
const CandidatsController = require('../Controller/Candidats');
const controller = new CandidatsController();
const loginValidator = require('../Validate/loginValidator');
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



module.exports = router;
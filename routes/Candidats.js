const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkLogin');
const CandidatsController = require('../Controller/Candidats');
const controller = new CandidatsController();

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
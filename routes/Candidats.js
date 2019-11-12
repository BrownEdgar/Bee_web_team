const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkLogin');
const CandidatsController = require('../Controller/Candidats');
const controller = new CandidatsController();

//get all Candidats
router.get('/', checkAuth, controller.getAllCandidats);

//add Candidats
router.post('/', checkAuth, controller.addCandidats);

//get Candidats by ID
router.get('/:candidatId', checkAuth, controller.getSpecialCandidat);

//update Candidats
router.patch('/:candidatId', checkAuth, controller.updateCandidat);

//Candidats Deleted
router.delete('/:candidatId', checkAuth, controller.deleteCandidat);



module.exports = router;
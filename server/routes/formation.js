const express = require('express');
const { addFormation, getFormation, delFormation, editFormation } = require('../controllers/formations');


const router = express.Router();

router.post('/addFormation', addFormation);
router.get('/formation', getFormation);
router.delete('/delete/:id',  delFormation);
router.put('/update/:id',  editFormation);

module.exports = router;
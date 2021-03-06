const express = require('express');
const qs = require('qs');
const router = express.Router();

const Patient = require('../models').Patient;
const Doctor = require('../models').Doctor;

router.post('/signIn', async (req, res, next)=>{
    const patient = await Patient.findOne({
        where: {id: req.body.id, password: req.body.password}
    });
    if (patient) {
        res.status(200).json({
            id: patient.id,
            name: patient.name,
        })
    } else {
        res.json('fail to login');
    }
});

module.exports = router;

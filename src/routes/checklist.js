const express = require("express");
const router = express.Router();
const Checklist = require('../models/checklist')

router.get('/', (req, res) => {
    console.log("Olá");
    res.send();
})

router.post('/', (req,res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})

router.get("/:id", (req,res) => {
    console.log(req.params)
    res.send(`ID : ${req.params.id}`)
})

router.put('/:id', (req,res) => {
    res.send(`PUT ID : ${req.params.id}`)
})

router.delete('/:id', (req,res) => {
    res.send(`Delete ID : ${req.params.id}`)
})

module.exports = router;
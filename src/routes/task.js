const express = require('express');

const checklistDependtRoute = express.Router();

const Checklist = require('../models/checklist');
const Task = require('../models/task');

checklistDependtRoute.get('/:id/tasks/new', async (req, res) => {
    try {
        let task = Task() ;
        res.status(200).render('tasks/new', {checklistId: req.params.id, task: task });
    } catch (error) {
        res.status(422).render('pages/error', {errors: "Erro ao carregar o fomulário"});
    }
})

module.exports = {checklistDependt: checklistDependtRoute};
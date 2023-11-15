const express = require('express');
const router = express.Router();

const { undoIncome, redoIncome, undoExpense, redoExpense } = require('../controllers/undoRedoController');

/* Router for undo/redo income */
router.post('/undoIncome', undoIncome);
router.delete('/redoIncome', redoIncome);

/* Router for undo/redo expense */
router.post('/undoExpense', undoExpense);
router.post('/undoExpense', redoExpense);

module.exports = router;
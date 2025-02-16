const express = require('express');
const router = express.Router();
const GameController = require('../controllers/tic_tac_toe');

router.post('/move', GameController.makeMove);
router.post('/new-game', GameController.newGame);
router.get('/game-state/:gameId', GameController.getGameState);

module.exports = router;
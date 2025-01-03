const GameService = require('../services/tic_tac_toe');

class GameController {
    static async makeMove(req, res) {
        try {
            const { board } = req.body;
            const aiMove = await GameService.calculateAIMove(board);
            res.json({ move: aiMove });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async newGame(req, res) {
        try {
            const gameId = await GameService.createNewGame();
            res.json({ gameId });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getGameState(req, res) {
        try {
            const { gameId } = req.params;
            const gameState = await GameService.getGameState(gameId);
            res.json(gameState);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = GameController;
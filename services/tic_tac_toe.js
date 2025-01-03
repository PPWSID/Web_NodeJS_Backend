const AIService = require('./tic_tac_toe_AI');
const { GameState } = require('../utils/tic_tac_toe');

class GameService {
    static games = new Map();

    static async calculateAIMove(board) {
        return AIService.getBestMove(board);
    }

    static async createNewGame() {
        const gameId = Date.now().toString();
        const newGame = new GameState();
        this.games.set(gameId, newGame);
        return gameId;
    }

    static async getGameState(gameId) {
        const game = this.games.get(gameId);
        if (!game) {
            throw new Error('Game not found');
        }
        return game;
    }
}

module.exports = GameService;
const { checkWinner } = require('../utils/gameUtils');

class AIService {
    static getBestMove(board) {
        let bestScore = -Infinity;
        let bestMove;
        
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                let score = this.minimax(board, 0, false);
                board[i] = '';
                
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = i;
                }
            }
        }
        return bestMove;
    }

    static minimax(board, depth, isMaximizing) {
        const winner = checkWinner(board);
        
        if (winner === 'O') return 1;
        if (winner === 'X') return -1;
        if (board.every(cell => cell !== '')) return 0;
        
        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === '') {
                    board[i] = 'O';
                    bestScore = Math.max(bestScore, this.minimax(board, depth + 1, false));
                    board[i] = '';
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === '') {
                    board[i] = 'X';
                    bestScore = Math.min(bestScore, this.minimax(board, depth + 1, true));
                    board[i] = '';
                }
            }
            return bestScore;
        }
    }
}

module.exports = AIService;
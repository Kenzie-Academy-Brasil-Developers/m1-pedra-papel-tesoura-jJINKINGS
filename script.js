function playRockPaperScissor (player1, player2) {

    const rock = "Pedra";
    const paper = "Papel";
    const scissor = "Tesoura";

    if((player1 === rock && player2 === scissor)||(player1 === paper && player2 === rock)||(player1 === scissor && player2 === paper)) {
        return "Jogador 1 venceu!";
    }
    else if((player1 === rock && player2 === paper)||(player1 === paper && player2 === scissor)||(player1 === scissor && player2 === rock)) {
        return "Jogador 2 venceu!";
    }
    else if((player1 === rock && player2 === rock)||(player1 === paper && player2 === paper)||(player1 === scissor && player2 === scissor)) {
        return "Empate!"
    }
}

    

    
    



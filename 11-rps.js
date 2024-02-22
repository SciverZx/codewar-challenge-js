// WPU Coding Challenge 2024 
// day3 11/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// const rps = (p1, p2) => {
//     if (p1 === p2 || p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock' || p1 === 'scissors' && p2 === 'paper') {
//         return "Player 1 Won";
//     } else {
//         return "Player 2 Won";
//     }
// };

// const rps = (p1, p2) => (p1 === p2 ? "Draw!" : (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper') ? "Player 1 won!" : "Player 2 won!");

const rps = (p1, p2) => p1 === p2 ? 'Draw!' : `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;

console.log(rps('paper','rock'));
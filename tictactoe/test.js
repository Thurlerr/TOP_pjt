const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
    [0, 4, 8], [2, 4, 6] // Diagonais
];

// Verifica se algum padrão de vitória está completo para "X"
winPatterns.forEach(pattern => console.log(pattern))
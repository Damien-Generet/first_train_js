let number = prompt('De quel nombre veux tu la facto ?');

function factoriel(n){
    if (n === 0) return 1;
    return n * factoriel(n - 1);
}

console.log(factoriel(number));
// RECURSIVIDADE
function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4! // O fatorial de 5 é a mesma coisa que 5 x o fatorial de 4.

n! = n x (n - 1)! // Podemos chegar assim a conclusão de que um fatorial de um número pode ser calculado 
                     baseado no fatorial de outro.
1! = 1  // A menos que seja o fatorial de 1,pois sabemos que matemáticamente o fatorial de 1 equivale a 1.  

*/
function somarNumeros(){

    let numero = 0;
    let contador = 0;
    let soma = 0;
    let opcao = 'S';

    alert('-- Exercício 1 - Soma de inteiros --');

    while(opcao === 'S'){

        contador++;
        numero = prompt("Informe o " + contador + "º número, do tipo inteiro, a ser somado")
        soma += parseInt(numero);
        opcao = prompt("Desejo continuar? Informar S [Sim] para prosseguir com o somatório.")

    }

    alert ('A soma total dos '+ contador +' números inteiros informados é: '+ soma )

}
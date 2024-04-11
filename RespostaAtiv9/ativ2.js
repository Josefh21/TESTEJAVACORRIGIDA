function lancamentoKungFuPanda(){
    var contagem = 10;
    
    let sequencia = setInterval(
        function contagemLancamento(){
            console.log(contagem);
            contagem--;

            if(contagem === 6){
                console.log("Inspira")
            }

            if(contagem === 4){
                console.log("Segura")
            }

            if(contagem === 2){
                console.log("Concentra")
            }

            if(contagem < 1){
                clearInterval(sequencia);
                console.log('Skadoosh')
            }
        }
        ,1000)
}